import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CardHolderRegularProps = Omit<IconBaseProps, 'children'>;

const CardHolderRegular = memo(
  forwardRef<SVGSVGElement, CardHolderRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="card-holder" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 3.25q1.03-.01 1.7.04.7.03 1.28.31.92.5 1.42 1.42.28.59.31 1.28.04.47.04 1.16V16q.01 1.03-.04 1.7-.04.7-.31 1.28-.5.92-1.42 1.42-.59.28-1.28.31-.67.05-1.7.04H6q-1.03.01-1.7-.04a3 3 0 0 1-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7V7.46q-.01-.68.04-1.16.04-.7.31-1.28c.32-.6.81-1.1 1.42-1.42q.59-.28 1.28-.31.67-.05 1.7-.04zM2.75 16c0 .71 0 1.2.03 1.58.03.37.09.57.16.71q.26.5.77.77c.14.07.34.13.7.16.39.03.88.03 1.59.03h12c.71 0 1.2 0 1.58-.03.37-.03.57-.09.71-.16q.5-.27.77-.77c.07-.14.13-.34.16-.7.03-.39.03-.88.03-1.59v-4.25h-5.07a4.25 4.25 0 0 1-8.36 0H2.75zm0-5.75H8.5c.41 0 .75.34.75.75a2.75 2.75 0 1 0 5.5 0c0-.41.34-.75.75-.75h5.75v-2H2.75zM6 4.75c-.71 0-1.2 0-1.58.03-.37.03-.57.09-.71.16q-.5.26-.77.77c-.07.14-.13.34-.16.7l-.02.34h18.48l-.02-.33a2 2 0 0 0-.16-.71q-.27-.5-.77-.77a2 2 0 0 0-.7-.16c-.39-.03-.88-.03-1.59-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

CardHolderRegular.displayName = 'CardHolderRegular';

// Triple export pattern (lucide-react style)
export { CardHolderRegular, CardHolderRegular as CardHolderRegularIcon, CardHolderRegular as SiCardHolderRegular };
export default CardHolderRegular;
export type { CardHolderRegularProps };
