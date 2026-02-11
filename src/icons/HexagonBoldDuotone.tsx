import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HexagonBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HexagonBoldDuotone = memo(
  forwardRef<SVGSVGElement, HexagonBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hexagon-bold-duotone" {...props}>
      <path d="M3.94 12a2 2 0 0 0 .04.4c.06.27.2.55.72 1.46l1.8 3.2a6 6 0 0 0 .9 1.42q.32.29.73.42c.27.09.59.1 1.68.1h4.38a6 6 0 0 0 1.68-.1 2 2 0 0 0 .73-.42 6 6 0 0 0 .9-1.42l1.8-3.2c.52-.91.66-1.19.72-1.45a2 2 0 0 0 .04-.41h2a4 4 0 0 1-.09.81c-.13.65-.47 1.23-.92 2.03l-1.8 3.2c-.47.83-.8 1.45-1.3 1.91a4 4 0 0 1-1.45.85c-.65.21-1.35.2-2.3.2H9.8c-.95 0-1.65.01-2.3-.2a4 4 0 0 1-1.45-.85c-.5-.46-.83-1.08-1.3-1.9l-1.8-3.2c-.45-.8-.79-1.4-.92-2.04a4 4 0 0 1-.09-.81z" opacity={.4} />
        <path d="M14.2 3c.95 0 1.65-.01 2.3.2a4 4 0 0 1 1.45.85c.5.46.83 1.08 1.3 1.9l1.8 3.2c.45.8.8 1.4.92 2.04a4 4 0 0 1 .09.81h-2a2 2 0 0 0-.04-.4c-.06-.27-.2-.55-.72-1.46l-1.8-3.2a6 6 0 0 0-.9-1.42 2 2 0 0 0-.73-.42 6 6 0 0 0-1.68-.1H9.81c-1.1 0-1.41.01-1.68.1a2 2 0 0 0-.72.42 6 6 0 0 0-.91 1.42l-1.8 3.2a6 6 0 0 0-.72 1.45 2 2 0 0 0-.04.41h-2a4 4 0 0 1 .09-.81c.13-.65.47-1.23.92-2.03l1.8-3.2c.47-.83.8-1.45 1.3-1.91a4 4 0 0 1 1.46-.85c.64-.21 1.34-.2 2.3-.2z" />
    </IconBase>
  ))
);

HexagonBoldDuotone.displayName = 'HexagonBoldDuotone';

// Triple export pattern (lucide-react style)
export { HexagonBoldDuotone, HexagonBoldDuotone as HexagonBoldDuotoneIcon, HexagonBoldDuotone as SiHexagonBoldDuotone };
export default HexagonBoldDuotone;
export type { HexagonBoldDuotoneProps };
