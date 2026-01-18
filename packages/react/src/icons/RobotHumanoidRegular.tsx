import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RobotHumanoidRegularProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidRegular = memo(
  forwardRef<SVGSVGElement, RobotHumanoidRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M10 9.25c.41 0 .75.34.75.75v1.5a.75.75 0 0 1-1.5 0V10c0-.41.34-.75.75-.75M14 9.25c.41 0 .75.34.75.75v1.5a.75.75 0 0 1-1.5 0V10c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25c.41 0 .75.34.75.75v1.3c2.8.3 5.1 2.34 5.79 5.01a1.75 1.75 0 1 1 .21 3.42V13a6.8 6.8 0 0 1-3.94 6.14l.42 1.68a.75.75 0 0 1-.73.93h-5a.75.75 0 0 1-.73-.93l.42-1.68A6.8 6.8 0 0 1 5.25 13v-.27l-.25.02a1.75 1.75 0 1 1 .46-3.44 6.8 6.8 0 0 1 5.79-5.02V3c0-.41.34-.75.75-.75m0 3.5A5.25 5.25 0 0 0 6.75 11v2a5.25 5.25 0 1 0 10.5 0v-2c0-2.9-2.35-5.25-5.25-5.25" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotHumanoidRegular.displayName = 'RobotHumanoidRegular';

export { RobotHumanoidRegular };
export type { RobotHumanoidRegularProps };
