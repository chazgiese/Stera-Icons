import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSquareFillProps = Omit<IconBaseProps, 'children'>;

const TextSquareFill = memo(
  forwardRef<SVGSVGElement, TextSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zM9.08 7.63c-.94 0-1.7.76-1.7 1.7 0 .49.39.88.87.88.47 0 .85-.37.87-.84h1.21c.44 0 .8.36.8.8v4.16c0 .44-.36.8-.8.8q-.37.01-.62.25-.12.12-.18.28-.04.07-.05.16t-.02.18.02.18q.01.07.05.16l.08.15c.15.23.42.39.72.39h3.34l.09-.01q.31-.03.53-.25l.1-.13q.1-.15.13-.31.03-.09.02-.18t-.02-.18q-.01-.07-.05-.16l-.08-.15-.05-.07-.05-.06q-.22-.21-.53-.25h-.1c-.43 0-.78-.36-.79-.8v-4.16c0-.44.36-.8.8-.8h1.21c.02.47.4.84.87.84.48 0 .88-.4.88-.88 0-.94-.77-1.7-1.71-1.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

TextSquareFill.displayName = 'TextSquareFill';

// Triple export pattern
export { TextSquareFill, TextSquareFill as TextSquareFillIcon, TextSquareFill as SiTextSquareFill };
export default TextSquareFill;
export type { TextSquareFillProps };
