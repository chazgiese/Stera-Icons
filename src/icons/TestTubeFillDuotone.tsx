import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeFillDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-fill-duotone" {...props}>
      <path d="M16 4a.5.5 0 0 0-.5.5v14a3.5 3.5 0 1 1-7 0v-14A.5.5 0 0 0 8 4z" opacity={.4} />
        <path d="M16 2a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TestTubeFillDuotone.displayName = 'TestTubeFillDuotone';

// Triple export pattern (lucide-react style)
export { TestTubeFillDuotone, TestTubeFillDuotone as TestTubeFillDuotoneIcon, TestTubeFillDuotone as SiTestTubeFillDuotone };
export default TestTubeFillDuotone;
export type { TestTubeFillDuotoneProps };
