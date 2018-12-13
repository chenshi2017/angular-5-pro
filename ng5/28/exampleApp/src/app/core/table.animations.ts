// 还是定义在core核心模块中？？？？？
import { trigger, style, state, transition, animate, group } from "@angular/core";

import { getStylesFromClasses } from "./animationUtils";

// 定义触发器，封装了元素的状态和状态转移，并且指派了一个名称
// 触发器名称：rowHighlight
export const HighlightTrigger = trigger("rowHighlight", [
    state("selected", style(getStylesFromClasses(["bg-success", "h6"]))),
    state("notselected", style(getStylesFromClasses("bg-info"))),
    state("void", style({
        transform: "translateX(-50%)"
    })),
    transition("* => notselected", animate("200ms")),
    transition("* => selected", [animate("400ms 200ms"), animate("550ms", style({backgroundColor:"yellow", fontSize:"30px"}))]),
    transition("void => *", animate("500ms"))
]);
