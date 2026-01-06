import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TestTubeFullIcon as RegularTestTubeFullIcon } from './test-tube-full';
import { TestTubeFullIconDuotone as TestTubeFullIconDuotone } from './test-tube-full-duotone';
import { TestTubeFullIconBold as TestTubeFullIconBold } from './test-tube-full-bold';
import { TestTubeFullIconBoldDuotone as TestTubeFullIconBoldDuotone } from './test-tube-full-bold-duotone';
import { TestTubeFullIconFill as TestTubeFullIconFill } from './test-tube-full-fill';
import { TestTubeFullIconFillDuotone as TestTubeFullIconFillDuotone } from './test-tube-full-fill-duotone';

export interface TestTubeFullIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TestTubeFullIcon = memo(forwardRef<SVGSVGElement, TestTubeFullIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TestTubeFullIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TestTubeFullIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TestTubeFullIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TestTubeFullIconFill ref={ref} {...props} />;
  if (duotone) return <TestTubeFullIconDuotone ref={ref} {...props} />;
  return <RegularTestTubeFullIcon ref={ref} {...props} />;
}));

TestTubeFullIcon.displayName = 'TestTubeFullIcon';

export { TestTubeFullIcon };
