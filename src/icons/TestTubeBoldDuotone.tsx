import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeBoldDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-bold-duotone" {...props}>
      <path d="M16.5 4a.5.5 0 0 0-.5.5V18a4 4 0 0 1-8 0V4.5a.5.5 0 0 0-.5-.5H10v14a2 2 0 1 0 4 0V4z" opacity={.4} />
        <path d="M16.5 2a1 1 0 0 1 0 2h-9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TestTubeBoldDuotone.displayName = 'TestTubeBoldDuotone';

// Triple export pattern (lucide-react style)
export { TestTubeBoldDuotone, TestTubeBoldDuotone as TestTubeBoldDuotoneIcon, TestTubeBoldDuotone as SiTestTubeBoldDuotone };
export default TestTubeBoldDuotone;
export type { TestTubeBoldDuotoneProps };
