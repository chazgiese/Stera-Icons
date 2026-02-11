import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFullFillProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullFill = memo(
  forwardRef<SVGSVGElement, TestTubeFullFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-full-fill" {...props}>
      <path fillRule="evenodd" d="M16 2a1 1 0 0 1 .1 2H16a.5.5 0 0 0-.5.5v14a3.5 3.5 0 1 1-7 0v-14A.5.5 0 0 0 8 4a1 1 0 0 1 0-2zm-5.5 6.28c.98.27 2.02.27 3 0V4h-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

TestTubeFullFill.displayName = 'TestTubeFullFill';

// Triple export pattern (lucide-react style)
export { TestTubeFullFill, TestTubeFullFill as TestTubeFullFillIcon, TestTubeFullFill as SiTestTubeFullFill };
export default TestTubeFullFill;
export type { TestTubeFullFillProps };
