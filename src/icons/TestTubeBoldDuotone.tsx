import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TestTubeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeBoldDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-bold-duotone" {...props}>
      <path fill="currentColor" d="M16 19a4 4 0 0 1-8 0V3h2v16a2 2 0 1 0 4 0V3h2z" opacity={.4} />
        <path fill="currentColor" d="M16.5 1a1 1 0 1 1 0 2h-9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TestTubeBoldDuotone.displayName = 'TestTubeBoldDuotone';

// Triple export pattern (lucide-react style)
export { TestTubeBoldDuotone, TestTubeBoldDuotone as TestTubeBoldDuotoneIcon, TestTubeBoldDuotone as SiTestTubeBoldDuotone };
export default TestTubeBoldDuotone;
export type { TestTubeBoldDuotoneProps };
