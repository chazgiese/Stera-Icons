import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TestTubeFullRegular } from './TestTubeFullRegular';
import { TestTubeFullRegularDuotone } from './TestTubeFullRegularDuotone';
import { TestTubeFullBold } from './TestTubeFullBold';
import { TestTubeFullBoldDuotone } from './TestTubeFullBoldDuotone';
import { TestTubeFullFill } from './TestTubeFullFill';
import { TestTubeFullFillDuotone } from './TestTubeFullFillDuotone';

export interface TestTubeFullProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TestTubeFull with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { TestTubeFullRegular } from 'stera-icons/TestTubeFullRegular';
 */
const TestTubeFull = memo(forwardRef<SVGSVGElement, TestTubeFullProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TestTubeFullBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TestTubeFullBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TestTubeFullFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TestTubeFullFill ref={ref} {...rest} />;
  if (duotone) return <TestTubeFullRegularDuotone ref={ref} {...rest} />;
  return <TestTubeFullRegular ref={ref} {...rest} />;
}));

TestTubeFull.displayName = 'TestTubeFull';

export { TestTubeFull };
