import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFullBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullBoldDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeFullBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-full-bold-duotone" {...props}>
      <path d="M16.5 4a.5.5 0 0 0-.5.5V18a4 4 0 0 1-8 0V4.5a.5.5 0 0 0-.5-.5H10v14a2 2 0 1 0 4 0V4z" opacity={.4} />
        <path d="M14 10.22a8 8 0 0 1-4 0v-2.1c1.29.48 2.71.48 4 0zM16.5 2a1 1 0 1 1 0 2h-9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TestTubeFullBoldDuotone.displayName = 'TestTubeFullBoldDuotone';

// Triple export pattern (lucide-react style)
export { TestTubeFullBoldDuotone, TestTubeFullBoldDuotone as TestTubeFullBoldDuotoneIcon, TestTubeFullBoldDuotone as SiTestTubeFullBoldDuotone };
export default TestTubeFullBoldDuotone;
export type { TestTubeFullBoldDuotoneProps };
