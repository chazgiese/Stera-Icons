import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeCircleFillProps = Omit<IconBaseProps, 'children'>;

const CodeCircleFill = memo(
  forwardRef<SVGSVGElement, CodeCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m1.21 5.4c-.47-.12-.94.17-1.06.64l-2 8c-.12.47.17.94.64 1.06s.94-.17 1.06-.64l2-8c.12-.47-.17-.94-.64-1.06m-4.1 2.23c-.33-.34-.89-.34-1.23 0l-2 2c-.34.34-.34.9 0 1.24l2 2c.34.34.9.34 1.24 0s.34-.9 0-1.24L7.74 12l1.38-1.38c.34-.34.34-.9 0-1.24m7 0c-.33-.34-.89-.34-1.23 0s-.34.9 0 1.24L16.26 12l-1.38 1.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0l2-2c.34-.34.34-.9 0-1.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

CodeCircleFill.displayName = 'CodeCircleFill';

// Triple export pattern
export { CodeCircleFill, CodeCircleFill as CodeCircleFillIcon, CodeCircleFill as SiCodeCircleFill };
export default CodeCircleFill;
export type { CodeCircleFillProps };
