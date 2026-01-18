import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TestTubeFullBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullBoldDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeFullBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16 19a4 4 0 0 1-8 0V3h2v16a2 2 0 1 0 4 0V3h2z" opacity={.4} />
        <path fill="currentColor" d="M14 10.22a8 8 0 0 1-4 0v-2.1c1.29.48 2.71.48 4 0zM16.5 1a1 1 0 1 1 0 2h-9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TestTubeFullBoldDuotone.displayName = 'TestTubeFullBoldDuotone';

export { TestTubeFullBoldDuotone };
export type { TestTubeFullBoldDuotoneProps };
