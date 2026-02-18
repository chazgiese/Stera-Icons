import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeSquareFillProps = Omit<IconBaseProps, 'children'>;

const CodeSquareFill = memo(
  forwardRef<SVGSVGElement, CodeSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="code-square-fill" {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm.71 4.52a.87.87 0 0 0-1.06.64l-2 8a.87.87 0 1 0 1.7.42l2-8a.87.87 0 0 0-.64-1.06m-4.1 2.23a.9.9 0 0 0-1.23 0l-2 2a.9.9 0 0 0 0 1.24l2 2a.88.88 0 0 0 1.24-1.24L7.74 12l1.38-1.38a.9.9 0 0 0 0-1.24m7 0a.88.88 0 0 0-1.23 1.24L16.26 12l-1.38 1.38a.88.88 0 0 0 1.24 1.24l2-2a.9.9 0 0 0 0-1.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

CodeSquareFill.displayName = 'CodeSquareFill';

// Triple export pattern (lucide-react style)
export { CodeSquareFill, CodeSquareFill as CodeSquareFillIcon, CodeSquareFill as SiCodeSquareFill };
export default CodeSquareFill;
export type { CodeSquareFillProps };
