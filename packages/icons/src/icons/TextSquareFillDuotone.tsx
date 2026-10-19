import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, TextSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zM9.08 7.63c-.94 0-1.7.76-1.7 1.7 0 .49.39.88.87.88.47 0 .85-.37.87-.84h1.21c.44 0 .8.36.8.8v4.16c0 .44-.36.8-.8.8l-.17.01-.09.02-.08.03-.07.04c-.28.15-.46.44-.46.77 0 .48.4.87.87.88h3.34q.18 0 .34-.07l.09-.05c.26-.15.44-.43.44-.76 0-.36-.22-.67-.53-.8q-.08-.05-.17-.06l-.17-.02c-.44 0-.8-.35-.8-.79v-4.16c0-.44.36-.8.8-.8h1.21c.02.47.4.84.87.84.48 0 .88-.4.88-.88 0-.94-.77-1.7-1.71-1.7z" clipRule="evenodd" opacity={.4} />
        <path d="M14.92 7.63c.94 0 1.7.76 1.7 1.7 0 .49-.39.88-.87.88-.47 0-.85-.37-.87-.84h-1.21c-.44 0-.8.36-.8.8v4.16c0 .44.36.8.8.8l.17.01.17.05c.31.14.53.45.53.81 0 .33-.18.61-.44.76l-.1.05q-.15.07-.33.07h-3.34c-.48 0-.87-.4-.87-.88 0-.33.18-.62.46-.77l.07-.04q.05 0 .08-.03l.09-.02.17-.02c.44 0 .8-.35.8-.79v-4.16c0-.44-.36-.8-.8-.8h-1.2c-.03.47-.41.84-.88.84s-.87-.4-.87-.88c0-.94.76-1.7 1.7-1.7z" />
    </IconBase>
  ))
);

TextSquareFillDuotone.displayName = 'TextSquareFillDuotone';

// Triple export pattern
export { TextSquareFillDuotone, TextSquareFillDuotone as TextSquareFillDuotoneIcon, TextSquareFillDuotone as SiTextSquareFillDuotone };
export default TextSquareFillDuotone;
export type { TextSquareFillDuotoneProps };
