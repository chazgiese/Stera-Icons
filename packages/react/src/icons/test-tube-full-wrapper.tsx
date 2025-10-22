import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TestTubeFullIcon as RegularTestTubeFullIcon } from './test-tube-full';
import { TestTubeFullIconBold } from './test-tube-full-bold';
import { TestTubeFullIconFilled } from './test-tube-full-filled';
import { TestTubeFullIconFilltone } from './test-tube-full-filltone';
import { TestTubeFullIconLinetone } from './test-tube-full-linetone';

export interface TestTubeFullIconProps extends IconProps {
  variant?: IconVariant;
}

const TestTubeFullIcon = memo(forwardRef<SVGSVGElement, TestTubeFullIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TestTubeFullIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TestTubeFullIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TestTubeFullIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TestTubeFullIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTestTubeFullIcon ref={ref} {...props} />;
  }
}));

TestTubeFullIcon.displayName = 'TestTubeFullIcon';

export { TestTubeFullIcon };
