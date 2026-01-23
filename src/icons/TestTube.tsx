import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TestTubeRegular } from './TestTubeRegular.js';
import { TestTubeRegularDuotone } from './TestTubeRegularDuotone.js';
import { TestTubeBold } from './TestTubeBold.js';
import { TestTubeBoldDuotone } from './TestTubeBoldDuotone.js';
import { TestTubeFill } from './TestTubeFill.js';
import { TestTubeFillDuotone } from './TestTubeFillDuotone.js';

export interface TestTubeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TestTube - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TestTubeRegular } from 'stera-icons/icons/TestTubeRegular';
 */
const TestTube = memo(forwardRef<SVGSVGElement, TestTubeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TestTubeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TestTubeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TestTubeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TestTubeFill ref={ref} {...rest} />;
  if (duotone) return <TestTubeRegularDuotone ref={ref} {...rest} />;
  return <TestTubeRegular ref={ref} {...rest} />;
}));

TestTube.displayName = 'TestTube';

// Triple export pattern (lucide-react style)
export { TestTube, TestTube as TestTubeIcon, TestTube as SiTestTube };
export default TestTube;
