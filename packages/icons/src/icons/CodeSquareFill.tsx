import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeSquareFillProps = Omit<IconBaseProps, 'children'>;

const CodeSquareFill = memo(
  forwardRef<SVGSVGElement, CodeSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm.21 4.9c-.47-.12-.94.17-1.06.64l-2 8c-.12.47.17.94.64 1.06s.94-.17 1.06-.64l2-8c.12-.47-.17-.94-.64-1.06m-4.1 2.23c-.33-.34-.89-.34-1.23 0l-2 2c-.34.34-.34.9 0 1.24l2 2c.34.34.9.34 1.24 0s.34-.9 0-1.24L7.74 12l1.38-1.38c.34-.34.34-.9 0-1.24m7 0c-.33-.34-.89-.34-1.23 0s-.34.9 0 1.24L16.26 12l-1.38 1.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0l2-2c.34-.34.34-.9 0-1.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

CodeSquareFill.displayName = 'CodeSquareFill';

// Triple export pattern
export { CodeSquareFill, CodeSquareFill as CodeSquareFillIcon, CodeSquareFill as SiCodeSquareFill };
export default CodeSquareFill;
export type { CodeSquareFillProps };
