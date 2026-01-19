import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RobotRegularProps = Omit<IconBaseProps, 'children'>;

const RobotRegular = memo(
  forwardRef<SVGSVGElement, RobotRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="robot" {...props}>
      <path fill="currentColor" d="M9.5 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75M14.5 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a1.25 1.25 0 0 1 .75 2.25v1.75h1.45q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.04.61.04 1.48h.75a1.25 1.25 0 1 1 0 2.5h-.75v.45q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37l-.48.02v1.35a.75.75 0 0 1-.75.67H9a.75.75 0 0 1-.75-.75v-1.27l-.48-.02a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-.45H3.5a1.25 1.25 0 1 1 0-2.5h.75q-.01-.87.04-1.48c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04h1.45V4.5A1.25 1.25 0 0 1 12 2.25m-2.2 5.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v2.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-2.4c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotRegular.displayName = 'RobotRegular';

// Triple export pattern (lucide-react style)
export { RobotRegular, RobotRegular as RobotRegularIcon, RobotRegular as SiRobotRegular };
export default RobotRegular;
export type { RobotRegularProps };
