import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TestTubeFullIcon as TestTubeFullIconRegular } from './test-tube-full';
import { TestTubeFullIconBold } from './test-tube-full-bold';
import { TestTubeFullIconFilled } from './test-tube-full-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <TestTubeFullIconRegular ref={ref} {...props} />;
  }
}));

TestTubeFullIcon.displayName = 'TestTubeFullIcon';

export { TestTubeFullIcon };
