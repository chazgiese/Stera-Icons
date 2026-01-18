import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TestTubeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeRegularDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.75 19a3.75 3.75 0 1 1-7.5 0V2.75h1.5V19a2.25 2.25 0 0 0 4.5 0V2.75h1.5z" opacity={.4} />
        <path fill="currentColor" d="M16.5 1.25a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TestTubeRegularDuotone.displayName = 'TestTubeRegularDuotone';

export { TestTubeRegularDuotone };
export type { TestTubeRegularDuotoneProps };
