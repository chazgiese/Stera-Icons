import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { RobotHumanoidRegular } from './RobotHumanoidRegular.js';
import { RobotHumanoidRegularDuotone } from './RobotHumanoidRegularDuotone.js';
import { RobotHumanoidBold } from './RobotHumanoidBold.js';
import { RobotHumanoidBoldDuotone } from './RobotHumanoidBoldDuotone.js';
import { RobotHumanoidFill } from './RobotHumanoidFill.js';
import { RobotHumanoidFillDuotone } from './RobotHumanoidFillDuotone.js';

export interface RobotHumanoidProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * RobotHumanoid - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { RobotHumanoidRegular } from 'stera-icons/icons/RobotHumanoidRegular';
 */
const RobotHumanoid = memo(forwardRef<SVGSVGElement, RobotHumanoidProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RobotHumanoidBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RobotHumanoidBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RobotHumanoidFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RobotHumanoidFill ref={ref} {...rest} />;
  if (duotone) return <RobotHumanoidRegularDuotone ref={ref} {...rest} />;
  return <RobotHumanoidRegular ref={ref} {...rest} />;
}));

RobotHumanoid.displayName = 'RobotHumanoid';

// Triple export pattern (lucide-react style)
export { RobotHumanoid, RobotHumanoid as RobotHumanoidIcon, RobotHumanoid as SiRobotHumanoid };
export default RobotHumanoid;
