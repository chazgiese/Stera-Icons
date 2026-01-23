import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFullFillProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullFill = memo(
  forwardRef<SVGSVGElement, TestTubeFullFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-full-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.5 1a1 1 0 0 1 .1 2h-.1a.5.5 0 0 0-.5.5V19a4 4 0 0 1-2.15 3.54 3.5 3.5 0 0 1-3.7 0A4 4 0 0 1 8 19V3.5a.5.5 0 0 0-.5-.5 1 1 0 0 1 0-2zM10 8.12c1.29.48 2.71.48 4 0V3h-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

TestTubeFullFill.displayName = 'TestTubeFullFill';

// Triple export pattern (lucide-react style)
export { TestTubeFullFill, TestTubeFullFill as TestTubeFullFillIcon, TestTubeFullFill as SiTestTubeFullFill };
export default TestTubeFullFill;
export type { TestTubeFullFillProps };
