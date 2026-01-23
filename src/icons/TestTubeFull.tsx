import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TestTubeFullRegular } from './TestTubeFullRegular.js';
import { TestTubeFullRegularDuotone } from './TestTubeFullRegularDuotone.js';
import { TestTubeFullBold } from './TestTubeFullBold.js';
import { TestTubeFullBoldDuotone } from './TestTubeFullBoldDuotone.js';
import { TestTubeFullFill } from './TestTubeFullFill.js';
import { TestTubeFullFillDuotone } from './TestTubeFullFillDuotone.js';

export interface TestTubeFullProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TestTubeFull - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TestTubeFullRegular } from 'stera-icons/icons/TestTubeFullRegular';
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

// Triple export pattern (lucide-react style)
export { TestTubeFull, TestTubeFull as TestTubeFullIcon, TestTubeFull as SiTestTubeFull };
export default TestTubeFull;
