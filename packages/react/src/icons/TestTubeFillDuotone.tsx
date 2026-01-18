import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TestTubeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeFillDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16.5 1a1 1 0 1 1 0 2h-9a1 1 0 0 1 0-2z" />
        <path fill="currentColor" d="M16 19a4 4 0 0 1-8 0V3h8z" opacity={.4} />
    </IconBase>
  ))
);

TestTubeFillDuotone.displayName = 'TestTubeFillDuotone';

// Triple export pattern (lucide-react style)
export { TestTubeFillDuotone, TestTubeFillDuotone as TestTubeFillDuotoneIcon, TestTubeFillDuotone as SiTestTubeFillDuotone };
export type { TestTubeFillDuotoneProps };
