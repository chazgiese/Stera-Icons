import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TestTubeIcon as RegularTestTubeIcon } from './test-tube';
import { TestTubeIconBold } from './test-tube-bold';
import { TestTubeIconFilled } from './test-tube-filled';
import { TestTubeIconFilltone } from './test-tube-filltone';
import { TestTubeIconLinetone } from './test-tube-linetone';

export interface TestTubeIconProps extends IconProps {
  variant?: IconVariant;
}

const TestTubeIcon = memo(forwardRef<SVGSVGElement, TestTubeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TestTubeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TestTubeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TestTubeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TestTubeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTestTubeIcon ref={ref} {...props} />;
  }
}));

TestTubeIcon.displayName = 'TestTubeIcon';

export { TestTubeIcon };
