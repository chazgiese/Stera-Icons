import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UsersThreeBoldProps = Omit<IconBaseProps, 'children'>;

const UsersThreeBold = memo(
  forwardRef<SVGSVGElement, UsersThreeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 7a4.5 4.5 0 0 1 3.13 7.73c1.13.61 2 1.6 2.48 2.91.15.42.35.9.18 1.6q-.12.46-.37.78c-.14.2-.35.44-.6.61-.63.4-1.3.37-1.88.37H9.06c-.58 0-1.25.03-1.87-.37a2 2 0 0 1-.61-.61q-.24-.31-.38-.79c-.16-.69.04-1.17.19-1.59a5.3 5.3 0 0 1 2.48-2.9A4.49 4.49 0 0 1 12 7m0 9c-1.94 0-3.21.89-3.73 2.32l-.13.4.01.04v.02l.14.18.1.02c.13.02.3.02.67.02h5.88a6 6 0 0 0 .77-.04h.01l.12-.18v-.02l.02-.04v-.02l-.04-.12-.1-.26C15.23 16.89 13.95 16 12 16m0-7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
        <path fill="currentColor" d="M7 3c1.47 0 2.77.7 3.59 1.78A1 1 0 1 1 8.99 6a2.5 2.5 0 1 0-3.06 3.77 1 1 0 0 1 .57.9v.51a1 1 0 0 1-.76.97 3.4 3.4 0 0 0-2.59 2.62v.02l.14.18.1.02c.13.02.3.02.67.02h.87a1 1 0 0 1 0 2h-.87c-.58 0-1.25.03-1.87-.37a2 2 0 0 1-.62-.61c-.14-.2-.3-.48-.37-.79-.16-.69.04-1.17.19-1.59a5.3 5.3 0 0 1 2.48-2.9A4.48 4.48 0 0 1 7 3M17 3a4.5 4.5 0 0 1 3.12 7.73 5.3 5.3 0 0 1 2.5 2.91c.14.42.34.9.17 1.6-.07.3-.22.57-.36.78-.15.2-.36.44-.62.61-.62.4-1.3.37-1.87.37h-.86a1 1 0 0 1 0-2h.86a6 6 0 0 0 .77-.04h.01l.12-.18v-.02l.02-.04v-.02l-.04-.12-.09-.26a3.4 3.4 0 0 0-2.47-2.18 1 1 0 0 1-.76-.97v-.5a1 1 0 0 1 .57-.91 2.5 2.5 0 1 0-3.06-3.77 1 1 0 0 1-1.6-1.2A4.5 4.5 0 0 1 17.01 3" />
    </IconBase>
  ))
);

UsersThreeBold.displayName = 'UsersThreeBold';

export { UsersThreeBold };
export type { UsersThreeBoldProps };
