import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TestTubeFillProps = Omit<IconBaseProps, 'children'>;

const TestTubeFill = memo(
  forwardRef<SVGSVGElement, TestTubeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-fill" {...props}>
      <path fill="currentColor" d="M16.5 1a1 1 0 0 1 .1 2h-.1a.5.5 0 0 0-.5.5V19a4 4 0 0 1-8 0V3.5a.5.5 0 0 0-.5-.5 1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TestTubeFill.displayName = 'TestTubeFill';

// Triple export pattern (lucide-react style)
export { TestTubeFill, TestTubeFill as TestTubeFillIcon, TestTubeFill as SiTestTubeFill };
export default TestTubeFill;
export type { TestTubeFillProps };
