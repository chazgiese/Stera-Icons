import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CapsLockRegularProps = Omit<IconBaseProps, 'children'>;

const CapsLockRegular = memo(
  forwardRef<SVGSVGElement, CapsLockRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.75 17.25a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2v-1.5c0-1.1.9-2 2-2zm-5.5 1.5a.5.5 0 0 0-.5.5v1.5c0 .28.22.5.5.5h5.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5zM10.59 1.85a2 2 0 0 1 2.82 0l8.27 8.27c.78.78.23 2.13-.89 2.13h-4.04v2a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2v-2H3.21a1.25 1.25 0 0 1-.89-2.13zm1.76 1.06a.5.5 0 0 0-.7 0L3.8 10.75H8c.41 0 .75.34.75.75v2.75c0 .28.22.5.5.5h5.5a.5.5 0 0 0 .5-.5V11.5c0-.41.34-.75.75-.75h4.19z" clipRule="evenodd" />
    </IconBase>
  ))
);

CapsLockRegular.displayName = 'CapsLockRegular';

// Triple export pattern (lucide-react style)
export { CapsLockRegular, CapsLockRegular as CapsLockRegularIcon, CapsLockRegular as SiCapsLockRegular };
export type { CapsLockRegularProps };
