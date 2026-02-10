import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-bold-duotone" {...props}>
      <path fill="currentColor" d="M13 2.05a10 10 0 0 1 0 19.9v-2.01a8 8 0 0 0 0-15.88z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2q.5 0 1 .05v19.9q-.5.05-1 .05a10 10 0 0 1 0-20m-1.03 2.07-.33.05h-.02l-.33.06-.07.02-.22.05-.08.03-.3.08q-.7.22-1.34.56l-.04.02-.57.33-.06.04-.24.17-.06.04a8 8 0 0 0-.77.63l-.07.07-.19.19-.07.07-.17.19-.1.11-.13.15-.16.2-.07.1a8 8 0 0 0-.53.8l-.07.12-.08.17-.09.16-.08.17-.08.18-.07.18-.25.7-.05.2-.16.72-.04.21-.02.16-.02.22a8 8 0 0 0 0 1.56l.02.22.02.16.04.2.16.73.05.2.19.55.05.13.08.2.08.17.09.18.05.11.12.23.04.06q.3.54.68 1.03l.1.1.1.14.12.14.44.45.07.07.2.17.07.07.2.16.08.06A8 8 0 0 0 11 19.94V4.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideBoldDuotone.displayName = 'CircleDivideBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideBoldDuotone, CircleDivideBoldDuotone as CircleDivideBoldDuotoneIcon, CircleDivideBoldDuotone as SiCircleDivideBoldDuotone };
export default CircleDivideBoldDuotone;
export type { CircleDivideBoldDuotoneProps };
