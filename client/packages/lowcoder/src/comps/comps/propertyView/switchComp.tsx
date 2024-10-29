import {Section, sectionNames} from "components/Section";
import {trans} from "@lowcoder-ee/i18n";
import {FormDataPropertyView} from "@lowcoder-ee/comps/comps/formComp/formDataConstants";
import {useContext} from "react";
import {disabledPropertyView, EditorContext, hiddenPropertyView} from "lowcoder-sdk";

const SetPropertyViewFn = ((children: any) => {
    return (
        <>
            <Section name={sectionNames.basic}>
                {children.value.propertyView({ label: trans("switchComp.defaultValue") })}
            </Section>

            <FormDataPropertyView {...children} />

            {["logic", "both"].includes(useContext(EditorContext).editorModeStatus) && (
                <Section name={sectionNames.interaction}>
                    {children.onEvent.getPropertyView()}
                    {disabledPropertyView(children)}
                    {hiddenPropertyView(children)}
                </Section>
            )}

            {["layout", "both"].includes(useContext(EditorContext).editorModeStatus) && (
                children.label.getPropertyView()
            )}

            {["layout", "both"].includes(useContext(EditorContext).editorModeStatus) && (
                <>
                    <Section name={sectionNames.style}>
                        {children.style.getPropertyView()}
                    </Section>
                    <Section name={sectionNames.labelStyle}>
                        {children.labelStyle.getPropertyView()}
                    </Section>
                    <Section name={sectionNames.inputFieldStyle}>
                        {children.inputFieldStyle.getPropertyView()}
                    </Section>
                    <Section name={sectionNames.animationStyle} hasTooltip={true}>
                        {children.animationStyle.getPropertyView()}
                    </Section>
                </>
            )}
        </>
    );
})

export default SetPropertyViewFn;