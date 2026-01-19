import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TestTubeFullFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullFillDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeFullFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-full-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16 19a4 4 0 0 1-8 0V3h8zM11 8a1 1 0 0 0-1 1v10a2 2 0 1 0 4 0V9a1 1 0 0 0-1-1z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13 8a1 1 0 0 1 1 1v10a2 2 0 1 1-4 0V9a1 1 0 0 1 1-1zM16.5 1a1 1 0 1 1 0 2h-9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TestTubeFullFillDuotone.displayName = 'TestTubeFullFillDuotone';

// Triple export pattern (lucide-react style)
export { TestTubeFullFillDuotone, TestTubeFullFillDuotone as TestTubeFullFillDuotoneIcon, TestTubeFullFillDuotone as SiTestTubeFullFillDuotone };
export default TestTubeFullFillDuotone;
export type { TestTubeFullFillDuotoneProps };
