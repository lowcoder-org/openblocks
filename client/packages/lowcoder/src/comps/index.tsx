import "comps/comps/layout/navLayout";
import "comps/comps/layout/mobileTabLayout";
import cnchar from "cnchar";
// import { ModalComp } from "comps/hooks/modalComp";
// import { ButtonComp } from "./comps/buttonComp/buttonComp";
// import { DropdownComp } from "./comps/buttonComp/dropdownComp";
// import { LinkComp } from "./comps/buttonComp/linkComp";
// import { ContainerComp, defaultContainerData } from "./comps/containerComp/containerComp";
// import { CustomComp } from "./comps/customComp/customComp";
// import { DatePickerComp, DateRangeComp } from "./comps/dateComp/dateComp";
// import { DividerComp } from "./comps/dividerComp";
// import { FileComp } from "./comps/fileComp/fileComp";
// import { FileViewerComp } from "./comps/fileViewerComp";
// import { ImageComp } from "./comps/imageComp";
// import { JsonSchemaFormComp } from "./comps/jsonSchemaFormComp/jsonSchemaFormComp";
// import { NumberInputComp } from "./comps/numberInputComp/numberInputComp";
// import { RangeSliderComp } from "./comps/numberInputComp/rangeSliderComp";
// import { SliderComp } from "./comps/numberInputComp/sliderComp";
// import { ProgressCircleComp } from "./comps/progressCircleComp";
// import { ProgressComp } from "./comps/progressComp";
// import { RatingComp } from "./comps/ratingComp";
// import { RichTextEditorComp } from "./comps/richTextEditorComp";
// import { CascaderWithDefault } from "./comps/selectInputComp/cascaderComp";
// import { CheckboxComp } from "./comps/selectInputComp/checkboxComp";
// import { MultiSelectComp } from "./comps/selectInputComp/multiSelectComp";
// import { RadioComp } from "./comps/selectInputComp/radioComp";
// import { SegmentedControlComp } from "./comps/selectInputComp/segmentedControl";
// import { SelectComp } from "./comps/selectInputComp/selectComp";
// import { SwitchComp } from "./comps/switchComp";
// import { defaultTableData } from "./comps/tableComp/mockTableComp";
// import { TabbedContainerComp } from "./comps/tabs";
// import { TextComp } from "./comps/textComp";
// import { InputComp } from "./comps/textInputComp/inputComp";
// import { PasswordComp } from "./comps/textInputComp/passwordComp";
// import { TextAreaComp } from "./comps/textInputComp/textAreaComp";
// import { TimePickerComp, TimeRangeComp } from "./comps/dateComp/timeComp";
// import { defaultFormData, FormComp } from "./comps/formComp/formComp";
// import { IFrameComp } from "./comps/iframeComp";
// import { defaultGridData, defaultListViewData, GridComp, ListViewComp,} from "./comps/listViewComp";
import { ModuleComp } from "./comps/moduleComp/moduleComp";
// import { NavComp } from "./comps/navComp/navComp";
// import { TableComp } from "./comps/tableComp";
import { registerComp, UICompManifest, UICompType } from "./uiCompRegistry";
// import { QRCodeComp } from "./comps/qrCodeComp";
// import { JsonExplorerComp } from "./comps/jsonComp/jsonExplorerComp";
// import { JsonEditorComp } from "./comps/jsonComp/jsonEditorComp";
// import { TreeComp } from "./comps/treeComp/treeComp";
// import { TreeSelectComp } from "./comps/treeComp/treeSelectComp";
import { trans } from "i18n";
import { remoteComp } from "./comps/remoteComp/remoteComp";
// import { AudioComp } from "./comps/mediaComp/audioComp";
// import { VideoComp } from "./comps/mediaComp/videoComp";
// import { DrawerComp } from "./hooks/drawerComp";
// import { CarouselComp } from "./comps/carouselComp";
// import { ToggleButtonComp } from "./comps/buttonComp/toggleButtonComp";
// import { defaultCollapsibleContainerData } from "./comps/containerComp/collapsibleContainerComp";
import { RemoteCompInfo } from "types/remoteComp";
// import { ScannerComp } from "./comps/buttonComp/scannerComp";
// import { SignatureComp } from "./comps/signatureComp";
// import { TimeLineComp } from "./comps/timelineComp/timelineComp";
// import { CommentComp } from "./comps/commentComp/commentComp";
// import { MentionComp } from "./comps/textInputComp/mentionComp";
// import { AutoCompleteComp } from "./comps/autoCompleteComp/autoCompleteComp";
// import { JsonLottieComp } from "./comps/jsonComp/jsonLottieComp"; 
// import { ResponsiveLayoutComp } from "./comps/responsiveLayout";
// import { VideoMeetingStreamComp } from "./comps/meetingComp/videoMeetingStreamComp";
// import { ControlButton } from "./comps/meetingComp/controlButton";
// import { VideoMeetingControllerComp } from "./comps/meetingComp/videoMeetingControllerComp";
// import { VideoSharingStreamComp } from "./comps/meetingComp/videoSharingStreamComp";

// const RangeSliderComp = import('./comps/numberInputComp/rangeSliderComp');
// const RangeSliderComp = lazy(() =>
//   import('./comps/numberInputComp/rangeSliderComp')
//     .then(({ RangeSliderComp }) => ({ default: RangeSliderComp })),
// );

import {
  AudioCompIcon,
  ButtonCompIcon,
  CalendarCompIcon,
  CarouselCompIcon,
  CascaderCompIcon,
  ChartCompIcon,
  CheckboxCompIcon,
  CollapsibleContainerCompIcon,
  ContainerCompIcon,
  CustomCompIcon,
  DateCompIcon,
  DateRangeCompIcon,
  DividerCompIcon,
  DrawerCompIcon,
  DropdownCompIcon,
  FileViewerCompIcon,
  FormCompIcon,
  GridCompIcon,
  IFrameCompIcon,
  ImageCompIcon,
  imageEditorIcon,
  InputCompIcon,
  JsonEditorCompIcon,
  JsonExplorerCompIcon,
  JsonFormCompIcon,
  LinkCompIcon,
  ListViewIcon,
  ModalCompIcon,
  MultiSelectCompIcon,
  NavComIcon,
  NumberInputCompIcon,
  PasswordCompIcon,
  ProcessCircleCompIcon,
  ProgressCompIcon,
  QRCodeCompIcon,
  RadioCompIcon,
  RangeSliderCompIcon,
  RatingCompIcon,
  RichTextEditorCompIcon,
  ScannerIcon,
  SegmentedCompIcon,
  SelectCompIcon,
  SignatureIcon,
  SliderCompIcon,
  SwitchCompIcon,
  TabbedContainerCompIcon,
  TableCompIcon,
  TextAreaCompIcon,
  TextCompIcon,
  TimeCompIcon,
  TimeRangeCompIcon,
  ToggleButtonCompIcon,
  TreeIcon,
  TreeSelectIcon,
  UploadCompIcon,
  VideoCompIcon,
  TimeLineIcon,
  LottieIcon,
  CommentIcon,
  MentionIcon,
  AutoCompleteCompIcon,
  ResponsiveLayoutCompIcon,
  MermaidIcon,
} from "lowcoder-design";

type Registry = {
  [key in UICompType]?: UICompManifest;
};

const builtInRemoteComps: Omit<RemoteCompInfo, "compName"> = {
  source: !!REACT_APP_BUNDLE_BUILTIN_PLUGIN ? "bundle" : "npm",
  isRemote: true,
  packageName: "lowcoder-comps",
};

var uiCompMap: Registry = {

  // Dashboards

  chart: {
    name: trans("uiComp.chartCompName"),
    enName: "Chart",
    description: trans("uiComp.chartCompDesc"),
    categories: ["dashboards"],
    icon: ChartCompIcon,
    comp: remoteComp({ ...builtInRemoteComps, compName: "chart" }),
    keywords: trans("uiComp.chartCompKeywords"),
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
  mermaid: {
    name: trans("uiComp.mermaidCompName"),
    enName: "Mermaid Charts",
    comp: remoteComp({ ...builtInRemoteComps, compName: "mermaid" }),
    description: trans("uiComp.mermaidCompDesc"),
    categories: ["dashboards"],
    icon: MermaidIcon,
    keywords: trans("uiComp.mermaidCompKeywords"),
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
  timeline: {
    name: trans("uiComp.timelineCompName"),
    enName: "timeline",
    description: trans("uiComp.timelineCompDesc"),
    categories: ["dashboards"],
    icon: TimeLineIcon,
    keywords: trans("uiComp.timelineCompKeywords"),
    // comp: TimeLineComp,
    lazyLoad: true,
    compName: 'TimeLineComp',
    compPath: '../../comps/timelineComp/timelineComp',
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
  table: {
    name: trans("uiComp.tableCompName"),
    enName: "Table",
    description: trans("uiComp.tableCompDesc"),
    categories: ["dashboards", "projectmanagement"],
    icon: TableCompIcon,
    keywords: trans("uiComp.tableCompKeywords"),
    // comp: TableComp,
    lazyLoad: true,
    compName: 'TableComp',
    compPath: '../../comps/tableComp',
    layoutInfo: {
      w: 12,
      h: 40,
    },
    withoutLoading: true,
    // defaultDataFn: defaultTableData,
    defaultDataFnName: 'defaultTableData',
    defaultDataFnPath: '../../comps/tableComp/mockTableComp'
  },
  slider: {
    name: trans("uiComp.sliderCompName"),
    enName: "Slider",
    description: trans("uiComp.sliderCompDesc"),
    categories: ["dashboards"],
    icon: SliderCompIcon,
    keywords: trans("uiComp.sliderCompKeywords"),
    // comp: SliderComp,
    lazyLoad: true,
    compName: 'SliderComp',
    compPath: '../../comps/numberInputComp/sliderComp',
    layoutInfo: {
      w: 6,
      h: 5,
    },
  },
  rangeSlider: {
    name: trans("uiComp.rangeSliderCompName"),
    enName: "Range Slider",
    description: trans("uiComp.rangeSliderCompDesc"),
    categories: ["dashboards"],
    icon: RangeSliderCompIcon,
    keywords: trans("uiComp.rangeSliderCompKeywords"),
    // comp: RangeSliderComp,
    lazyLoad: true,
    compName: 'RangeSliderComp',
    compPath: '../../comps/numberInputComp/rangeSliderComp',
    layoutInfo: {
      w: 6,
      h: 5,
    },
  },

  // Layout

  responsiveLayout: {
    name: trans("uiComp.responsiveLayoutCompName"),
    enName: "Responsive Layout",
    description: trans("uiComp.responsiveLayoutCompDesc"),
    categories: ["layout"],
    icon: ResponsiveLayoutCompIcon,
    keywords: trans("uiComp.responsiveLayoutCompKeywords"),
    // comp: ResponsiveLayoutComp,
    lazyLoad: true,
    compName: 'ResponsiveLayoutComp',
    compPath: '../../comps/responsiveLayout',
    withoutLoading: true,
    layoutInfo: {
      w: 24,
      h: 25,
      delayCollision: true,
    },
  },
  container: {
    name: trans("uiComp.containerCompName"),
    enName: "Container",
    description: trans("uiComp.containerCompDesc"),
    categories: ["layout"],
    icon: ContainerCompIcon,
    keywords: trans("uiComp.containerCompKeywords"),
    // comp: ContainerComp,
    lazyLoad: true,
    compName: 'ContainerComp',
    compPath: '../../comps/containerComp/containerComp',
    withoutLoading: true,
    layoutInfo: {
      w: 12,
      h: 25,
      // static: true,
      delayCollision: true,
    },
    // defaultDataFn: defaultContainerData,
    defaultDataFnName: 'defaultContainerData',
    defaultDataFnPath: '../../comps/containerComp/containerComp'
  },
  tabbedContainer: {
    name: trans("uiComp.tabbedContainerCompName"),
    enName: "Tabbed Container",
    description: trans("uiComp.tabbedContainerCompDesc"),
    categories: ["layout"],
    icon: TabbedContainerCompIcon,
    keywords: trans("uiComp.tabbedContainerCompKeywords"),
    // comp: TabbedContainerComp,
    lazyLoad: true,
    compName: 'TabbedContainerComp',
    compPath: '../../comps/tabs',
    withoutLoading: true,
    layoutInfo: {
      w: 12,
      h: 25,
      // static: true,
      delayCollision: true,
    },
  },
  collapsibleContainer: {
    name: trans("uiComp.collapsibleContainerCompName"),
    enName: "Collapsible Container",
    description: trans("uiComp.collapsibleContainerCompDesc"),
    categories: ["layout"],
    icon: CollapsibleContainerCompIcon,
    keywords: trans("uiComp.collapsibleContainerCompKeywords"),
    // comp: ContainerComp,
    lazyLoad: true,
    compName: 'ContainerComp',
    compPath: '../../comps/containerComp/containerComp',
    withoutLoading: true,
    layoutInfo: {
      w: 12,
      h: 25,
      // static: true,
      delayCollision: true,
    },
    // defaultDataFn: defaultCollapsibleContainerData,
    defaultDataFnName: 'defaultCollapsibleContainerData',
    defaultDataFnPath: '../../comps/containerComp/collapsibleContainerComp',
  },
  listView: {
    name: trans("uiComp.listViewCompName"),
    enName: "List View",
    icon: ListViewIcon,
    description: trans("uiComp.listViewCompDesc"),
    categories: ["layout"],
    keywords: trans("uiComp.listViewCompKeywords"),
    // comp: ListViewComp,
    lazyLoad: true,
    compName: 'ListViewComp',
    compPath: '../../comps/listViewComp',
    layoutInfo: {
      w: 12,
      h: 40,
      delayCollision: true,
    },
    // defaultDataFn: defaultListViewData,
    defaultDataFnName: 'defaultListViewData',
    defaultDataFnPath: '../../comps/listViewComp',
  },
  grid: {
    name: trans("uiComp.gridCompName"),
    enName: "Grid",
    icon: GridCompIcon,
    description: trans("uiComp.gridCompDesc"),
    categories: ["layout"],
    keywords: trans("uiComp.gridCompKeywords"),
    // comp: GridComp,
    lazyLoad: true,
    compName: 'GridComp',
    compPath: '../../comps/listViewComp',
    layoutInfo: {
      w: 12,
      h: 40,
      delayCollision: true,
    },
    // defaultDataFn: defaultGridData,
    defaultDataFnName: 'defaultGridData',
    defaultDataFnPath: '../../comps/listViewComp',
  },
  modal: {
    name: trans("uiComp.modalCompName"),
    enName: "Modal",
    icon: ModalCompIcon,
    description: trans("uiComp.modalCompDesc"),
    categories: ["layout"],
    keywords: trans("uiComp.modalCompKeywords"),
    // comp: ModalComp,
    lazyLoad: true,
    compName: 'ModalComp',
    compPath: '../../comps/hooks/modalComp',
    withoutLoading: true,
  },
  drawer: {
    name: trans("uiComp.drawerCompName"),
    enName: "Drawer",
    description: trans("uiComp.drawerCompDesc"),
    categories: ["layout"],
    icon: DrawerCompIcon,
    keywords: trans("uiComp.drawerCompKeywords"),
    // comp: DrawerComp,
    lazyLoad: true,
    compName: 'DrawerComp',
    compPath: '../../hooks/drawerComp',
    withoutLoading: true,
  },
  navigation: {
    name: trans("uiComp.navigationCompName"),
    enName: "Navigation",
    description: trans("uiComp.navigationCompDesc"),
    icon: NavComIcon,
    categories: ["layout"],
    keywords: trans("uiComp.navigationCompKeywords"),
    // comp: NavComp,
    lazyLoad: true,
    compName: 'NavComp',
    compPath: '../../comps/navComp/navComp',
    layoutInfo: {
      w: 24,
      h: 5,
    },
  },
  cascader: {
    name: trans("uiComp.cascaderCompName"),
    enName: "Cascader",
    description: trans("uiComp.cascaderCompDesc"),
    categories: ["layout"],
    icon: CascaderCompIcon,
    keywords: trans("uiComp.cascaderCompKeywords"),
    // comp: CascaderWithDefault,
    lazyLoad: true,
    compName: 'CascaderWithDefault',
    compPath: '../../comps/selectInputComp/cascaderComp',
    layoutInfo: {
      w: 9,
      h: 5,
    },
  },
  link: {
    name: trans("uiComp.linkCompName"),
    enName: "Link",
    description: trans("uiComp.linkCompDesc"),
    categories: ["layout"],
    icon: LinkCompIcon,
    keywords: trans("uiComp.linkCompKeywords"),
    // comp: LinkComp,
    lazyLoad: true,
    compName: 'LinkComp',
    compPath: '../../comps/buttonComp/linkComp',
    layoutInfo: {
      w: 6,
      h: 5,
    },
  },
  divider: {
    name: trans("uiComp.dividerCompName"),
    enName: "Divider",
    description: trans("uiComp.dividerCompDesc"),
    categories: ["layout"],
    icon: DividerCompIcon,
    keywords: trans("uiComp.dividerCompKeywords"),
    // comp: DividerComp,
    lazyLoad: true,
    compName: 'DividerComp',
    compPath: '../../comps/dividerComp',
    layoutInfo: {
      w: 12,
      h: 1,
    },
  },

  // Scheduling

  calendar: {
    name: trans("uiComp.calendarCompName"),
    enName: "Calendar",
    description: trans("uiComp.calendarCompDesc"),
    categories: ["scheduling", "projectmanagement"],
    icon: CalendarCompIcon,
    keywords: trans("uiComp.calendarCompKeywords"),
    comp: remoteComp({ ...builtInRemoteComps, compName: "calendar" }),
    layoutInfo: {
      w: 19,
      h: 60,
    },
  },

  // Collaboration

  sharingcomponent: {
    name: trans("meeting.sharingCompName"),
    enName: "Sharing",
    description: trans("meeting.sharingCompName"),
    categories: ["collaboration"],
    icon: VideoCompIcon,
    keywords: trans("meeting.meetingCompKeywords"),
    // comp: VideoSharingStreamComp,
    lazyLoad: true,
    compName: 'VideoSharingStreamComp',
    compPath: '../../comps/meetingComp/videoSharingStreamComp',
    withoutLoading: true,
    layoutInfo: {
      w: 12, 
      h: 50,
    }
  },
  videocomponent: {
    name: trans("meeting.videoCompName"),
    enName: "Video",
    description: trans("meeting.videoCompName"),
    categories: ["collaboration"],
    icon: VideoCompIcon,
    keywords: trans("meeting.meetingCompKeywords"),
    // comp: VideoMeetingStreamComp,
    lazyLoad: true,
    compName: 'VideoMeetingStreamComp',
    compPath: '../../comps/meetingComp/videoMeetingStreamComp',
    withoutLoading: true,
    layoutInfo: {
      w: 6, 
      h: 32,
    }
  },
  meeting: {
    name: trans("meeting.meetingCompName"),
    enName: "Drawer",
    description: trans("meeting.meetingCompDesc"),
    categories: ["collaboration"],
    icon: DrawerCompIcon,
    keywords: trans("meeting.meetingCompKeywords"),
    // comp: VideoMeetingControllerComp,
    lazyLoad: true,
    compName: 'VideoMeetingControllerComp',
    compPath: '../../comps/meetingComp/videoMeetingControllerComp',
    withoutLoading: true,
  },
  comment: {
    name: trans("uiComp.commentCompName"),
    enName: "comment",
    description: trans("uiComp.commentCompDesc"),
    categories: ["forms","collaboration"],
    icon: CommentIcon,
    keywords: trans("uiComp.commentCompKeywords"),
    // comp: CommentComp,
    lazyLoad: true,
    compName: 'CommentComp',
    compPath: '../../comps/commentComp/commentComp',
    layoutInfo: {
      w: 13,
      h: 55,
    },
  },
  mention: {
    name: trans("uiComp.mentionCompName"),
    enName: "mention",
    description: trans("uiComp.mentionCompDesc"),
    categories: ["forms","collaboration"],
    icon: MentionIcon,
    keywords: trans("uiComp.mentionCompKeywords"),
    // comp: MentionComp,
    lazyLoad: true,
    compName: 'MentionComp',
    compPath: '../../comps/textInputComp/mentionComp',
  },

  // Forms

  form: {
    name: trans("uiComp.formCompName"),
    enName: "Form",
    description: trans("uiComp.formCompDesc"),
    categories: ["forms"],
    icon: FormCompIcon,
    keywords: trans("uiComp.formCompKeywords"),
    // comp: FormComp,
    lazyLoad: true,
    compName: 'FormComp',
    compPath: '../../comps/formComp/formComp',
    withoutLoading: true,
    layoutInfo: {
      w: 12,
      h: 50,
      // static: true,
      delayCollision: true,
    },
    // defaultDataFn: defaultFormData,
    defaultDataFnName: 'defaultFormData',
    defaultDataFnPath: '../../comps/formComp/formComp',
  },
  jsonSchemaForm: {
    name: trans("uiComp.jsonSchemaFormCompName"),
    enName: "JSON Schema Form",
    description: trans("uiComp.jsonSchemaFormCompDesc"),
    categories: ["forms"],
    icon: JsonFormCompIcon,
    keywords: trans("uiComp.jsonSchemaFormCompKeywords"),
    // comp: JsonSchemaFormComp,
    lazyLoad: true,
    compName: 'JsonSchemaFormComp',
    compPath: '../../comps/jsonSchemaFormComp/jsonSchemaFormComp',
    layoutInfo: {
      w: 12,
      h: 50,
    },
  },
  jsonEditor: {
    name: trans("uiComp.jsonEditorCompName"),
    enName: "JSON Editor",
    description: trans("uiComp.jsonEditorCompDesc"),
    categories: ["forms"],
    icon: JsonEditorCompIcon,
    keywords: trans("uiComp.jsonEditorCompKeywords"),
    // comp: JsonEditorComp,
    lazyLoad: true,
    compName: 'JsonEditorComp',
    compPath: '../../comps/jsonComp/jsonEditorComp',
    layoutInfo: {
      w: 12,
      h: 50,
    },
  },
  jsonExplorer: {
    name: trans("uiComp.jsonExplorerCompName"),
    enName: "JSON Explorer",
    description: trans("uiComp.jsonExplorerCompDesc"),
    categories: ["forms"],
    icon: JsonExplorerCompIcon,
    keywords: trans("uiComp.jsonExplorerCompKeywords"),
    // comp: JsonExplorerComp,
    lazyLoad: true,
    compName: 'JsonExplorerComp',
    compPath: '../../comps/jsonComp/jsonExplorerComp',
    layoutInfo: {
      w: 12,
      h: 50,
    },
  },
  richTextEditor: {
    name: trans("uiComp.richTextEditorCompName"),
    enName: "Rich Text Editor",
    categories: ["forms"],
    description: trans("uiComp.richTextEditorCompDesc"),
    icon: RichTextEditorCompIcon,
    keywords: trans("uiComp.richTextEditorCompKeywords"),
    // comp: RichTextEditorComp,
    lazyLoad: true,
    compName: 'RichTextEditorComp',
    compPath: '../../comps/richTextEditorComp',
    layoutInfo: {
      w: 12,
      h: 50,
    },
  },
  input: {
    name: trans("uiComp.inputCompName"),
    enName: "Input",
    description: trans("uiComp.inputCompDesc"),
    categories: ["forms"],
    icon: InputCompIcon,
    keywords: trans("uiComp.inputCompKeywords"),
    // comp: InputComp,
    lazyLoad: true,
    compName: 'InputComp',
    compPath: '../../comps/textInputComp/inputComp',
    layoutInfo: {
      w: 6, 
      h: 6,
    }
  },
  password: {
    name: trans("uiComp.passwordCompName"),
    enName: "Password",
    description: trans("uiComp.passwordCompDesc"),
    categories: ["forms"],
    icon: PasswordCompIcon,
    keywords: trans("uiComp.passwordCompKeywords"),
    // comp: PasswordComp,
    lazyLoad: true,
    compName: 'PasswordComp',
    compPath: '../../comps/textInputComp/passwordComp',
    layoutInfo: {
      w: 6, 
      h: 6,
    }
  },
  numberInput: {
    name: trans("uiComp.numberInputCompName"),
    enName: "Number Input",
    description: trans("uiComp.numberInputCompDesc"),
    categories: ["forms"],
    icon: NumberInputCompIcon,
    keywords: trans("uiComp.numberInputCompKeywords"),
    // comp: NumberInputComp,
    lazyLoad: true,
    compName: 'NumberInputComp',
    compPath: '../../comps/numberInputComp/numberInputComp',
    layoutInfo: {
      w: 6, 
      h: 6,
    }
  },
  textArea: {
    name: trans("uiComp.textAreaCompName"),
    enName: "Text Area",
    description: trans("uiComp.textAreaCompDesc"),
    categories: ["forms"],
    icon: TextAreaCompIcon,
    keywords: trans("uiComp.textAreaCompKeywords"),
    // comp: TextAreaComp,
    lazyLoad: true,
    compName: 'TextAreaComp',
    compPath: '../../comps/textInputComp/textAreaComp',
    layoutInfo: {
      w: 6, 
      h: 12,
    }
  },
  switch: {
    name: trans("uiComp.switchCompName"),
    enName: "Switch",
    description: trans("uiComp.switchCompDesc"),
    categories: ["forms"],
    icon: SwitchCompIcon,
    keywords: trans("uiComp.switchCompKeywords"),
    // comp: SwitchComp,
    lazyLoad: true,
    compName: 'SwitchComp',
    compPath: '../../comps/switchComp',
    layoutInfo: {
      w: 6, 
      h: 6,
    }
  },
  checkbox: {
    name: trans("uiComp.checkboxCompName"),
    enName: "Checkbox",
    description: trans("uiComp.checkboxCompDesc"),
    categories: ["forms"],
    icon: CheckboxCompIcon,
    keywords: trans("uiComp.checkboxCompKeywords"),
    // comp: CheckboxComp,
    lazyLoad: true,
    compName: 'CheckboxComp',
    compPath: '../../comps/selectInputComp/checkboxComp',
    layoutInfo: {
      w: 6,
      h: 6,
    },
  },
  radio: {
    name: trans("uiComp.radioCompName"),
    enName: "Radio",
    description: trans("uiComp.radioCompDesc"),
    categories: ["forms"],
    icon: RadioCompIcon,
    keywords: trans("uiComp.radioCompKeywords"),
    // comp: RadioComp,
    lazyLoad: true,
    compName: 'RadioComp',
    compPath: '../../comps/selectInputComp/radioComp',
    layoutInfo: {
      w: 6,
      h: 6,
    },
  },
  date: {
    name: trans("uiComp.dateCompName"),
    enName: "Date",
    description: trans("uiComp.dateCompDesc"),
    categories: ["forms", "scheduling"],
    icon: DateCompIcon,
    keywords: trans("uiComp.dateCompKeywords"),
    // comp: DatePickerComp,
    lazyLoad: true,
    compName: 'DatePickerComp',
    compPath: '../../comps/dateComp/dateComp',
    layoutInfo: {
      w: 6,
      h: 6,
    },
  },
  dateRange: {
    name: trans("uiComp.dateRangeCompName"),
    enName: "Date Range",
    description: trans("uiComp.dateRangeCompDesc"),
    categories: ["forms", "scheduling"],
    icon: DateRangeCompIcon,
    keywords: trans("uiComp.dateRangeCompKeywords"),
    // comp: DateRangeComp,
    lazyLoad: true,
    compName: 'DateRangeComp',
    compPath: '../../comps/dateComp/dateComp',
    layoutInfo: {
      w: 12,
      h: 6,
    },
  },
  time: {
    name: trans("uiComp.timeCompName"),
    enName: "Time",
    description: trans("uiComp.timeCompDesc"),
    categories: ["forms", "scheduling"],
    icon: TimeCompIcon,
    keywords: trans("uiComp.timeCompKeywords"),
    // comp: TimePickerComp,
    lazyLoad: true,
    compName: 'TimePickerComp',
    compPath: '../../comps/dateComp/timeComp',
    layoutInfo: {
      w: 6,
      h: 6,
    },
  },
  timeRange: {
    name: trans("uiComp.timeRangeCompName"),
    enName: "Time Range",
    categories: ["forms", "scheduling"],
    description: trans("uiComp.timeRangeCompDesc"),
    icon: TimeRangeCompIcon,
    keywords: trans("uiComp.timeRangeCompKeywords"),
    // comp: TimeRangeComp,
    lazyLoad: true,
    compName: 'TimeRangeComp',
    compPath: '../../comps/dateComp/timeComp',
    layoutInfo: {
      w: 12,
      h: 6,
    },
  },
  button: {
    name: trans("uiComp.buttonCompName"),
    enName: "Button",
    description: trans("uiComp.buttonCompDesc"),
    categories: ["forms"],
    icon: ButtonCompIcon,
    keywords: trans("uiComp.buttonCompKeywords"),
    // comp: ButtonComp,
    lazyLoad: true,
    compName: 'ButtonComp',
    compPath: '../../comps/buttonComp/buttonComp',
    layoutInfo: {
      w: 6,
      h: 6,
    },
    withoutLoading: true,
  },
  controlButton: {
    name: trans("meeting.meetingControlCompName"),
    enName: "Controls",
    description: trans("meeting.meetingCompDesc"),
    categories: ["forms", "collaboration"],
    icon: ButtonCompIcon,
    keywords: trans("meeting.meetingCompKeywords"),
    // comp: ControlButton,
    lazyLoad: true,
    compName: 'ControlButton',
    compPath: '../../comps/meetingComp/controlButton',
    withoutLoading: true,
    layoutInfo: {
      w: 3,
      h: 6,
    },
  },
  dropdown: {
    name: trans("uiComp.dropdownCompName"),
    enName: "Dropdown",
    description: trans("uiComp.dropdownCompDesc"),
    categories: ["forms"],
    icon: DropdownCompIcon,
    keywords: trans("uiComp.dropdownCompKeywords"),
    // comp: DropdownComp,
    lazyLoad: true,
    compName: 'DropdownComp',
    compPath: '../../comps/buttonComp/dropdownComp',
    layoutInfo: {
      w: 6,
      h: 6,
    },
  },
  toggleButton: {
    name: trans("uiComp.toggleButtonCompName"),
    enName: "Toggle Button",
    description: trans("uiComp.toggleButtonCompDesc"),
    categories: ["forms"],
    icon: ToggleButtonCompIcon,
    keywords: trans("uiComp.toggleButtonCompKeywords"),
    // comp: ToggleButtonComp,
    lazyLoad: true,
    compName: 'ToggleButtonComp',
    compPath: '../../comps/buttonComp/toggleButtonComp',
    layoutInfo: {
      w: 3,
      h: 6,
    },
  },
  segmentedControl: {
    name: trans("uiComp.segmentedControlCompName"),
    enName: "Segmented Control",
    description: trans("uiComp.segmentedControlCompDesc"),
    categories: ["forms"],
    icon: SegmentedCompIcon,
    keywords: trans("uiComp.segmentedControlCompKeywords"),
    // comp: SegmentedControlComp,
    lazyLoad: true,
    compName: 'SegmentedControlComp',
    compPath: '../../comps/selectInputComp/segmentedControl',
    layoutInfo: {
      w: 6,
      h: 6,
    },
  },
  rating: {
    name: trans("uiComp.ratingCompName"),
    enName: "Rating",
    description: trans("uiComp.ratingCompDesc"),
    categories: ["forms"],
    icon: RatingCompIcon,
    keywords: trans("uiComp.ratingCompKeywords"),
    // comp: RatingComp,
    lazyLoad: true,
    compName: 'RatingComp',
    compPath: '../../comps/ratingComp',
    layoutInfo: {
      w: 6, 
      h: 6,
    }
  },
  autocomplete: {
    name: trans("uiComp.autoCompleteCompName"),
    enName: "autoComplete",
    description: trans("uiComp.autoCompleteCompDesc"),
    categories: ["forms","collaboration"],
    icon: AutoCompleteCompIcon,
    keywords: cnchar
      .spell(trans("uiComp.autoCompleteCompName"), "first", "low")
      .toString(),
    // comp: AutoCompleteComp,
    lazyLoad: true,
    compName: 'AutoCompleteComp',
    compPath: '../../comps/autoCompleteComp/autoCompleteComp',
    layoutInfo: {
      w: 6,
      h: 5,
    },
  },

  // Project Management

  progress: {
    name: trans("uiComp.progressCompName"),
    enName: "Progress",
    description: trans("uiComp.progressCompDesc"),
    categories: ["dashboards", "projectmanagement"],
    icon: ProgressCompIcon,
    keywords: trans("uiComp.progressCompKeywords"),
    // comp: ProgressComp,
    lazyLoad: true,
    compName: 'ProgressComp',
    compPath: '../../comps/progressCom',
    layoutInfo: {
      w: 6,
      h: 5,
    },
  },
  progressCircle: {
    name: trans("uiComp.progressCircleCompName"),
    enName: "Process Circle",
    description: trans("uiComp.progressCircleCompDesc"),
    categories: ["dashboards", "projectmanagement"],
    icon: ProcessCircleCompIcon,
    keywords: trans("uiComp.progressCircleCompKeywords"),
    // comp: ProgressCircleComp,
    lazyLoad: true,
    compName: 'ProgressCircleComp',
    compPath: '../../comps/progressCircleComp',
    layoutInfo: {
      w: 6,
      h: 20,
    },
  },  


  // Document handling
  
  file: {
    name: trans("uiComp.fileUploadCompName"),
    enName: "File Upload",
    description: trans("uiComp.fileUploadCompDesc"),
    categories: ["documents"],
    icon: UploadCompIcon,
    keywords: trans("uiComp.fileUploadCompKeywords"),
    // comp: FileComp,
    lazyLoad: true,
    compName: 'FileComp',
    compPath: '../../comps/fileComp/fileComp',
    layoutInfo: {
      w: 6,
      h: 5,
    },
  },
  fileViewer: {
    name: trans("uiComp.fileViewerCompName"),
    enName: "File Viewer",
    description: trans("uiComp.fileViewerCompDesc"),
    categories: ["documents"],
    icon: FileViewerCompIcon,
    keywords: trans("uiComp.fileViewerCompKeywords"),
    // comp: FileViewerComp,
    lazyLoad: true,
    compName: 'FileViewerComp',
    compPath: '../../comps/fileViewerComp',
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
  
  // Multimedia

  image: {
    name: trans("uiComp.imageCompName"),
    enName: "Image",
    description: trans("uiComp.imageCompDesc"),
    categories: ["multimedia"],
    icon: ImageCompIcon,
    keywords: trans("uiComp.imageCompKeywords"),
    // comp: ImageComp,
    lazyLoad: true,
    compName: 'ImageComp',
    compPath: '../../comps/imageComp',
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
  carousel: {
    name: trans("uiComp.carouselCompName"),
    enName: "Carousel",
    description: trans("uiComp.carouselCompDesc"),
    categories: ["multimedia"],
    icon: CarouselCompIcon,
    keywords: trans("uiComp.drawerCompKeywords"),
    // comp: CarouselComp,
    lazyLoad: true,
    compName: 'CarouselComp',
    compPath: '../../comps/carouselComp',
    withoutLoading: true,
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
  audio: {
    name: trans("uiComp.audioCompName"),
    enName: "Audio",
    description: trans("uiComp.audioCompDesc"),
    categories: ["multimedia"],
    icon: AudioCompIcon,
    keywords: trans("uiComp.audioCompKeywords"),
    // comp: AudioComp,
    lazyLoad: true,
    compName: 'AudioComp',
    compPath: '../../comps/mediaComp/audioComp',
    layoutInfo: {
      w: 6,
      h: 5,
    },
  },
  video: {
    name: trans("uiComp.videoCompName"),
    enName: "Video",
    description: trans("uiComp.videoCompDesc"),
    categories: ["multimedia"],
    icon: VideoCompIcon,
    keywords: trans("uiComp.videoCompKeywords"),
    // comp: VideoComp,
    lazyLoad: true,
    compName: 'VideoComp',
    compPath: '../../comps/mediaComp/videoComp',
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
  jsonLottie: {
    name: trans("uiComp.jsonLottieCompName"),
    enName: "Lottie Animation",
    description: trans("uiComp.jsonLottieCompDesc"),
    categories: ["multimedia"],
    icon: LottieIcon,
    keywords: trans("uiComp.jsonLottieCompKeywords"),
    // comp: JsonLottieComp,
    lazyLoad: true,
    compName: 'JsonLottieComp',
    compPath: '../../comps/jsonComp/jsonLottieComp',
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
  imageEditor: {
    name: trans("uiComp.imageEditorCompName"),
    enName: "Image Editor",
    comp: remoteComp({ ...builtInRemoteComps, compName: "imageEditor" }),
    description: trans("uiComp.imageEditorCompDesc"),
    categories: ["multimedia"],
    icon: imageEditorIcon,
    keywords: trans("uiComp.imageEditorCompKeywords"),
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },

  // item Handling

  qrCode: {
    name: trans("uiComp.qrCodeCompName"),
    enName: "QR Code",
    description: trans("uiComp.qrCodeCompDesc"),
    categories: ["itemHandling", "documents"],
    icon: QRCodeCompIcon,
    keywords: trans("uiComp.qrCodeCompKeywords"),
    // comp: QRCodeComp,
    lazyLoad: true,
    compName: 'QRCodeComp',
    compPath: '../../comps/qrCodeComp',
    layoutInfo: {
      w: 6,
      h: 32,
    },
  },
  scanner: {
    name: trans("uiComp.scannerCompName"),
    enName: "Scanner",
    description: trans("uiComp.scannerCompDesc"),
    categories: ["itemHandling"],
    icon: ScannerIcon,
    keywords: trans("uiComp.scannerCompKeywords"),
    // comp: ScannerComp,
    lazyLoad: true,
    compName: 'ScannerComp',
    compPath: '../../comps/buttonComp/scannerComp',
    layoutInfo: {
      w: 6,
      h: 5,
    },
  },
  signature: {
    name: trans("uiComp.signatureCompName"),
    enName: "Signature",
    description: trans("uiComp.signatureCompDesc"),
    categories: ["itemHandling"],
    icon: SignatureIcon,
    keywords: trans("uiComp.signatureCompKeywords"),
    // comp: SignatureComp,
    lazyLoad: true,
    compName: 'SignatureComp',
    compPath: '../../comps/signatureComp',
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
  select: {
    name: trans("uiComp.selectCompName"),
    enName: "Select",
    description: trans("uiComp.selectCompDesc"),
    categories: ["forms", "itemHandling"],
    icon: SelectCompIcon,
    keywords: trans("uiComp.selectCompKeywords"),
    // comp: SelectComp,
    lazyLoad: true,
    compName: 'SelectComp',
    compPath: '../../comps/selectInputComp/selectComp',
    layoutInfo: {
      w: 6,
      h: 5,
    },
  },
  multiSelect: {
    name: trans("uiComp.multiSelectCompName"),
    enName: "Multiselect",
    description: trans("uiComp.multiSelectCompDesc"),
    categories: ["forms", "itemHandling"],
    icon: MultiSelectCompIcon,
    keywords: trans("uiComp.multiSelectCompKeywords"),
    // comp: MultiSelectComp,
    lazyLoad: true,
    compName: 'MultiSelectComp',
    compPath: '../../comps/selectInputComp/multiSelectComp',
    layoutInfo: {
      w: 6,
      h: 5,
    },
  },
  tree: {
    name: trans("uiComp.treeCompName"),
    enName: "Tree",
    description: trans("uiComp.treeCompDesc"),
    categories: ["layout", "itemHandling", "documents"],
    icon: TreeIcon,
    keywords: trans("uiComp.treeCompKeywords"),
    // comp: TreeComp,
    lazyLoad: true,
    compName: 'TreeComp',
    compPath: '../../comps/treeComp/treeComp',
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
  treeSelect: {
    name: trans("uiComp.treeSelectCompName"),
    enName: "Tree Select",
    description: trans("uiComp.treeSelectCompDesc"),
    categories: ["layout", "itemHandling", "documents"],
    icon: TreeSelectIcon,
    keywords: trans("uiComp.treeSelectCompKeywords"),
    // comp: TreeSelectComp,
    lazyLoad: true,
    compName: 'TreeSelectComp',
    compPath: '../../comps/treeComp/treeSelectComp',
    layoutInfo: {
      w: 12,
      h: 5,
    },
  },

  // Integration

  iframe: {
    name: trans("uiComp.iframeCompName"),
    enName: "IFrame",
    description: trans("uiComp.iframeCompDesc"),
    icon: IFrameCompIcon,
    categories: ["integration"],
    keywords: trans("uiComp.iframeCompKeywords"),
    // comp: IFrameComp,
    lazyLoad: true,
    compName: 'IFrameComp',
    compPath: '../../comps/iframeComp',
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
  custom: {
    name: trans("uiComp.customCompName"),
    enName: "Custom Component",
    description: trans("uiComp.customCompDesc"),
    icon: CustomCompIcon,
    categories: ["integration"],
    keywords: trans("uiComp.customCompKeywords"),
    // comp: CustomComp,
    lazyLoad: true,
    compName: 'CustomComp',
    compPath: '../../comps/customComp/customComp',
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
  module: {
    name: trans("uiComp.moduleCompName"),
    enName: "Module",
    icon: CustomCompIcon,
    description: trans("uiComp.moduleCompDesc"),
    categories: [],
    keywords: trans("uiComp.moduleCompKeywords"),
    comp: ModuleComp,
    // lazyLoad: true,
    // compName: 'ModuleComp',
    // compPath: '../../comps/moduleComp/moduleComp',
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },

  // mixed

  text: {
    name: trans("uiComp.textCompName"),
    enName: "Text",
    description: trans("uiComp.textCompDesc"),
    categories: ["dashboards", "layout", "multimedia"],
    icon: TextCompIcon,
    keywords: trans("uiComp.textCompKeywords"),
    // comp: TextComp,
    compName: 'TextComp',
    lazyLoad: true,
    compPath: '../../comps/textComp',
    layoutInfo: {
      w: 6,
      h: 24,
    },
  },
  
};

export function loadComps() {
  if(!uiCompMap) return;
  const entries = Object.entries(uiCompMap);
  for (const [compType, manifest] of entries) {
    registerComp(compType as UICompType, manifest);
  }
}
