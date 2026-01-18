import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LightbulbBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LightbulbBoldDuotone = memo(
  forwardRef<SVGSVGElement, LightbulbBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1a7 7 0 0 1 6.24 10.17l-.68 1.27c-.56 1-1.06 1.9-1.34 2.83a1 1 0 0 0-.84-1.26l-.12-.01h-.71c.35-.9.83-1.76 1.26-2.54q.35-.6.65-1.2.52-1.02.54-2.26a5 5 0 1 0-9.46 2.27l.65 1.2c.43.77.9 1.62 1.26 2.53h-.7a1 1 0 0 0-.97 1.29c-.27-.93-.77-1.84-1.34-2.85l-.68-1.27A7 7 0 0 1 12 1" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.38 14a1 1 0 0 1 .84 1.29q-.22.69-.22 1.37V19a3 3 0 0 1-2.21 2.9 2 2 0 0 1-3.58 0A3 3 0 0 1 8 19v-2.34q0-.68-.22-1.37A1 1 0 0 1 8.74 14h6.64m-5.42 2q.04.32.04.66V19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2.34q0-.34.04-.66z" clipRule="evenodd" />
    </IconBase>
  ))
);

LightbulbBoldDuotone.displayName = 'LightbulbBoldDuotone';

// Triple export pattern (lucide-react style)
export { LightbulbBoldDuotone, LightbulbBoldDuotone as LightbulbBoldDuotoneIcon, LightbulbBoldDuotone as SiLightbulbBoldDuotone };
export type { LightbulbBoldDuotoneProps };
