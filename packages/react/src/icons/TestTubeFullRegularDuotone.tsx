import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TestTubeFullRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullRegularDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeFullRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.75 19a3.75 3.75 0 1 1-7.5 0V2.75h1.5V19a2.25 2.25 0 0 0 4.5 0V2.75h1.5z" opacity={.4} />
        <path fill="currentColor" d="M14.25 8.37v1.51a7.5 7.5 0 0 1-4.5 0v-1.5l.03-.08c1.42.57 3.02.57 4.44 0zM16.5 1.25a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TestTubeFullRegularDuotone.displayName = 'TestTubeFullRegularDuotone';

// Triple export pattern (lucide-react style)
export { TestTubeFullRegularDuotone, TestTubeFullRegularDuotone as TestTubeFullRegularDuotoneIcon, TestTubeFullRegularDuotone as SiTestTubeFullRegularDuotone };
export type { TestTubeFullRegularDuotoneProps };
