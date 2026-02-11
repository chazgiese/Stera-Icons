import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeRegularProps = Omit<IconBaseProps, 'children'>;

const TestTubeRegular = memo(
  forwardRef<SVGSVGElement, TestTubeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube" {...props}>
      <path fillRule="evenodd" d="M16.5 2.25a.75.75 0 0 1 .08 1.5h-.08a.75.75 0 0 0-.75.75V18a3.75 3.75 0 1 1-7.5 0V4.5c0-.39-.3-.7-.67-.75h-.16a.75.75 0 0 1 .08-1.5zM9.75 18a2.25 2.25 0 0 0 4.5 0V3.75h-4.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

TestTubeRegular.displayName = 'TestTubeRegular';

// Triple export pattern (lucide-react style)
export { TestTubeRegular, TestTubeRegular as TestTubeRegularIcon, TestTubeRegular as SiTestTubeRegular };
export default TestTubeRegular;
export type { TestTubeRegularProps };
