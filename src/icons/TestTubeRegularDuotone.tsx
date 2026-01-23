import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeRegularDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-duotone" {...props}>
      <path fill="currentColor" d="M15.75 19a3.75 3.75 0 1 1-7.5 0V2.75h1.5V19a2.25 2.25 0 0 0 4.5 0V2.75h1.5z" opacity={.4} />
        <path fill="currentColor" d="M16.5 1.25a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TestTubeRegularDuotone.displayName = 'TestTubeRegularDuotone';

// Triple export pattern (lucide-react style)
export { TestTubeRegularDuotone, TestTubeRegularDuotone as TestTubeRegularDuotoneIcon, TestTubeRegularDuotone as SiTestTubeRegularDuotone };
export default TestTubeRegularDuotone;
export type { TestTubeRegularDuotoneProps };
