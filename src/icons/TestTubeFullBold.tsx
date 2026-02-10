import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFullBoldProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullBold = memo(
  forwardRef<SVGSVGElement, TestTubeFullBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-full-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.5 2a1 1 0 0 1 .1 2h-.1a.5.5 0 0 0-.5.5V18a4 4 0 0 1-8 0V4.5a.5.5 0 0 0-.5-.5 1 1 0 0 1 0-2zM14 10.22a8 8 0 0 1-4 0V18a2 2 0 1 0 4 0zm-4-2.1c1.29.48 2.71.48 4 0V4h-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

TestTubeFullBold.displayName = 'TestTubeFullBold';

// Triple export pattern (lucide-react style)
export { TestTubeFullBold, TestTubeFullBold as TestTubeFullBoldIcon, TestTubeFullBold as SiTestTubeFullBold };
export default TestTubeFullBold;
export type { TestTubeFullBoldProps };
