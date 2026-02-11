import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFullFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullFillDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeFullFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-full-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M16 4a.5.5 0 0 0-.5.5v14a3.5 3.5 0 1 1-7 0v-14A.5.5 0 0 0 8 4zm-5 4.5a1 1 0 0 0-1 1v9a2 2 0 1 0 4 0v-9a1 1 0 0 0-1-1z" clipRule="evenodd" opacity={.4} />
        <path d="M13 8.5a1 1 0 0 1 1 1v9a2 2 0 1 1-4 0v-9a1 1 0 0 1 1-1zM16 2a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TestTubeFullFillDuotone.displayName = 'TestTubeFullFillDuotone';

// Triple export pattern (lucide-react style)
export { TestTubeFullFillDuotone, TestTubeFullFillDuotone as TestTubeFullFillDuotoneIcon, TestTubeFullFillDuotone as SiTestTubeFullFillDuotone };
export default TestTubeFullFillDuotone;
export type { TestTubeFullFillDuotoneProps };
