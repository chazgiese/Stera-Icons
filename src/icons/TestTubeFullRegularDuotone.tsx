import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFullRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullRegularDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeFullRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-full-duotone" {...props}>
      <path fill="currentColor" d="M16.5 3.75a.75.75 0 0 0-.75.75V18a3.75 3.75 0 1 1-7.5 0V4.5a.75.75 0 0 0-.75-.75h2.25V18a2.25 2.25 0 0 0 4.5 0V3.75z" opacity={.4} />
        <path fill="currentColor" d="M14.25 10.02c-1.47.4-3.03.4-4.5 0V8.46c1.46.48 3.04.48 4.5 0zM16.5 2.25a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TestTubeFullRegularDuotone.displayName = 'TestTubeFullRegularDuotone';

// Triple export pattern (lucide-react style)
export { TestTubeFullRegularDuotone, TestTubeFullRegularDuotone as TestTubeFullRegularDuotoneIcon, TestTubeFullRegularDuotone as SiTestTubeFullRegularDuotone };
export default TestTubeFullRegularDuotone;
export type { TestTubeFullRegularDuotoneProps };
