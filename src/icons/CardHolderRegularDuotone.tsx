import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CardHolderRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CardHolderRegularDuotone = memo(
  forwardRef<SVGSVGElement, CardHolderRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="card-holder-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 4.25q1.03-.01 1.7.04.7.04 1.28.31.92.5 1.42 1.42.28.59.31 1.28.05.67.04 1.7v2.25h-1.5v-2H3.75v2h-1.5V9q-.01-1.03.04-1.7.03-.7.31-1.28c.32-.6.81-1.1 1.42-1.42q.59-.28 1.28-.31.67-.05 1.7-.04zM7 5.75c-.71 0-1.2 0-1.58.03-.37.03-.57.09-.71.16q-.5.26-.77.77c-.07.14-.13.34-.16.7l-.02.34h16.48l-.02-.33a2 2 0 0 0-.16-.71q-.27-.5-.77-.77a2 2 0 0 0-.7-.16c-.39-.03-.88-.03-1.59-.03z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9 11.25c.41 0 .75.34.75.75a2.25 2.25 0 0 0 4.5 0c0-.41.34-.75.75-.75h6.75v2.95q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-2.95zM3.75 14.2c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-1.45h-4.58a3.75 3.75 0 0 1-7.34 0H3.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

CardHolderRegularDuotone.displayName = 'CardHolderRegularDuotone';

// Triple export pattern (lucide-react style)
export { CardHolderRegularDuotone, CardHolderRegularDuotone as CardHolderRegularDuotoneIcon, CardHolderRegularDuotone as SiCardHolderRegularDuotone };
export default CardHolderRegularDuotone;
export type { CardHolderRegularDuotoneProps };
