import { Section, sectionNames } from "lowcoder-design";
import { eventHandlerControl } from "../../controls/eventHandlerControl";
import { StringStateControl, numberExposingStateControl } from "../../controls/codeStateControl";
import { UICompBuilder } from "../../generators";
import { NameConfig, NameConfigHidden, withExposingConfigs } from "../../generators/withExposing";
import { RecordConstructorToView } from "lowcoder-core";
import React, { useRef, useState } from "react";
import { styleControl } from "comps/controls/styleControl";
import {
  AnimationStyle,
  AnimationStyleType,
  VideoStyle,
} from 'comps/controls/styleControlConstants';
import { BoolControl } from "comps/controls/boolControl";
import { withDefault } from "../../generators/simpleGenerators";
import { playIcon } from "lowcoder-design";
import { RangeControl } from "../../controls/codeControl";
import { trans } from "i18n";
import { Video } from "lowcoder-design";
import type ReactPlayer from "react-player";
import { mediaCommonChildren, mediaMethods } from "./mediaUtils";

import styled from "styled-components";
import {viewMode} from "@lowcoder-ee/util/editor";
const SetPropertyViewVideoComp =  React.lazy( async () => await import("./setProperty").then(module => ({default: module.SetPropertyViewVideoComp})))

const EventOptions = [
  { label: trans("video.play"), value: "play", description: trans("video.playDesc") },
  { label: trans("video.pause"), value: "pause", description: trans("video.pauseDesc") },
  { label: trans("video.load"), value: "load", description: trans("video.loadDesc") },
  { label: trans("video.ended"), value: "ended", description: trans("video.endedDesc") },
] as const;

/* const StyledContainer = styled.div.attrs(props => ({
  style: props.style ? getStyle(props.style) : {}
}))``;

const getStyle = (style: ImageStyleType) => {
  return {
    border: `1px solid ${style.border}`,
    radius: style.radius,
    margin: style.margin,
    padding: style.padding,
  };
}; */
const Container = styled.div<{ $style: any; $animationStyle: AnimationStyleType }>`
${props => props.$style};
rotate:${props => props.$style.rotation};
${props=>props.$animationStyle};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div > video {
    object-fit: contain;
    pointer-events: auto;
    height: 100%;
    width: 100%;
    :focus-visible {
      outline: 0px;
    }
  }
`;
const ContainerVideo = (props: RecordConstructorToView<typeof childrenMap>) => {
  const videoRef = useRef<ReactPlayer | null>(null);
  let [posterClicked, setPosterClicked] = useState(false);
  return (
    <Container ref={props.containerRef} $style={props.style}
      $animationStyle={props.animationStyle}>
      <Video 
        config={{
          file: {
            forceVideo: true,
          },
        }}
        light={props.autoPlay ? "" : props.poster.value}
        ref={(t: ReactPlayer | null) => {
          props.viewRef(t);
          videoRef.current = t;
        }}
        url={props.src.value}
        onPlay={() => props.onEvent("play")}
        onReady={() => {
          if (videoRef.current != null) {
            props.duration.onChange(videoRef.current.getDuration());
          }
          props.onEvent("load");
        }}
        onPause={() => props.onEvent("pause")}
        onEnded={() => props.onEvent("ended")}
        loop={props.loop}
        controls={!props.controls}
        volume={props.volume}
        style={props.style}
        playbackRate={props.playbackRate}
        onClickPreview={() => {
          setPosterClicked(true);
        }}
        draggable={false}
        playIcon={playIcon()}
        playing={props.autoPlay || posterClicked}
        onProgress={() => {
          if (videoRef.current != null)
            props.currentTimeStamp.onChange(videoRef.current.getCurrentTime());
        }}
      />
    </Container>
  );
};

const childrenMap = {
  src: withDefault(StringStateControl, trans('video.defaultSrcUrl')),
  poster: withDefault(StringStateControl, trans('video.defaultPosterUrl')),
  onEvent: eventHandlerControl(EventOptions),
  style: styleControl(VideoStyle , 'style'),
  animationStyle: styleControl(AnimationStyle , 'animationStyle'),
  autoPlay: BoolControl,
  loop: BoolControl,
  controls: BoolControl,
  volume: RangeControl.closed(0, 1, 1),
  playbackRate: RangeControl.closed(1, 2, 1),
  currentTimeStamp: numberExposingStateControl('currentTimeStamp', 0),
  duration: numberExposingStateControl('duration'),
  ...mediaCommonChildren,
};
 
let VideoBasicComp = (function () {
  let builder = new UICompBuilder(childrenMap, (props) => {
    return <ContainerVideo {...props} />;
  })
  if (viewMode() === "edit") {
    builder.setPropertyViewFn((children) => <SetPropertyViewVideoComp {...children}></SetPropertyViewVideoComp>);
  }
      return builder
    .setExposeMethodConfigs(mediaMethods())
    .build();
})();

VideoBasicComp = class extends VideoBasicComp {
  override autoHeight(): boolean {
    return false;
  }
};

export const VideoComp = withExposingConfigs(VideoBasicComp, [
  new NameConfig("src", trans("video.srcDesc")),
  new NameConfig("currentTimeStamp", trans("video.currentTimeStamp")),
  new NameConfig("duration", trans("video.duration")),
  NameConfigHidden,
]);
