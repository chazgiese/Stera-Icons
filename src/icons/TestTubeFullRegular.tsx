import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFullRegularProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullRegular = memo(
  forwardRef<SVGSVGElement, TestTubeFullRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-full" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.5 1.25a.75.75 0 0 1 .08 1.5h-.16a.75.75 0 0 0-.67.75V19a3.75 3.75 0 1 1-7.5 0V3.5c0-.39-.3-.7-.67-.75h-.16a.75.75 0 0 1 .08-1.5zm-2.25 8.63a7.5 7.5 0 0 1-4.5 0V19a2.25 2.25 0 0 0 4.5 0zm-4.5-1.5.03-.08c1.42.57 3.02.57 4.44 0l.03.07V2.75h-4.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

TestTubeFullRegular.displayName = 'TestTubeFullRegular';

// Triple export pattern (lucide-react style)
export { TestTubeFullRegular, TestTubeFullRegular as TestTubeFullRegularIcon, TestTubeFullRegular as SiTestTubeFullRegular };
export default TestTubeFullRegular;
export type { TestTubeFullRegularProps };
