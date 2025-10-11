import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TestTubeIcon as TestTubeIconRegular } from './test-tube';
import { TestTubeIconBold } from './test-tube-bold';
import { TestTubeIconFilled } from './test-tube-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <TestTubeIconRegular ref={ref} {...props} />;
  }
}));

TestTubeIcon.displayName = 'TestTubeIcon';

export { TestTubeIcon };
