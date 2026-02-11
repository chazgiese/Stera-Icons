import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeBoldProps = Omit<IconBaseProps, 'children'>;

const TestTubeBold = memo(
  forwardRef<SVGSVGElement, TestTubeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-bold" {...props}>
      <path fillRule="evenodd" d="M16.5 2a1 1 0 0 1 .1 2h-.1a.5.5 0 0 0-.5.5V18a4 4 0 0 1-8 0V4.5a.5.5 0 0 0-.5-.5h-.1a1 1 0 0 1 .1-2zM10 18a2 2 0 1 0 4 0V4h-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

TestTubeBold.displayName = 'TestTubeBold';

// Triple export pattern (lucide-react style)
export { TestTubeBold, TestTubeBold as TestTubeBoldIcon, TestTubeBold as SiTestTubeBold };
export default TestTubeBold;
export type { TestTubeBoldProps };
