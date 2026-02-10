import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFillProps = Omit<IconBaseProps, 'children'>;

const TestTubeFill = memo(
  forwardRef<SVGSVGElement, TestTubeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-fill" {...props}>
      <path fill="currentColor" d="M16 2a1 1 0 0 1 .1 2H16a.5.5 0 0 0-.5.5v14a3.5 3.5 0 1 1-7 0v-14A.5.5 0 0 0 8 4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TestTubeFill.displayName = 'TestTubeFill';

// Triple export pattern (lucide-react style)
export { TestTubeFill, TestTubeFill as TestTubeFillIcon, TestTubeFill as SiTestTubeFill };
export default TestTubeFill;
export type { TestTubeFillProps };
