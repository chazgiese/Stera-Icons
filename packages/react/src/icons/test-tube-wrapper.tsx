import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TestTubeIcon as RegularTestTubeIcon } from './test-tube';
import { TestTubeIconDuotone as TestTubeIconDuotone } from './test-tube-duotone';
import { TestTubeIconBold as TestTubeIconBold } from './test-tube-bold';
import { TestTubeIconBoldDuotone as TestTubeIconBoldDuotone } from './test-tube-bold-duotone';
import { TestTubeIconFill as TestTubeIconFill } from './test-tube-fill';
import { TestTubeIconFillDuotone as TestTubeIconFillDuotone } from './test-tube-fill-duotone';

export interface TestTubeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TestTubeIcon = memo(forwardRef<SVGSVGElement, TestTubeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TestTubeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TestTubeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TestTubeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TestTubeIconFill ref={ref} {...props} />;
  if (duotone) return <TestTubeIconDuotone ref={ref} {...props} />;
  return <RegularTestTubeIcon ref={ref} {...props} />;
}));

TestTubeIcon.displayName = 'TestTubeIcon';

export { TestTubeIcon };
