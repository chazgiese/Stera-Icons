import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UsersThreeRegularProps = Omit<IconBaseProps, 'children'>;

const UsersThreeRegular = memo(
  forwardRef<SVGSVGElement, UsersThreeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="users-three" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 7.25a4.25 4.25 0 0 1 2.68 7.54 5 5 0 0 1 2.7 2.93c.15.43.31.85.17 1.46-.06.26-.2.5-.33.7-.13.18-.32.4-.54.54-.55.35-1.14.33-1.74.33H9.06c-.6 0-1.2.02-1.74-.33a2 2 0 0 1-.54-.55 2 2 0 0 1-.33-.7c-.14-.6.02-1.02.18-1.45a5 5 0 0 1 2.69-2.93A4.24 4.24 0 0 1 12 7.25m0 8.5c-2.02 0-3.4.94-3.96 2.48l-.14.42q-.01.07.01.19l.02.05a1 1 0 0 0 .17.23l.04.04c.1.07.18.09.92.09h5.88c.75 0 .83-.02.92-.09l.04-.04a1 1 0 0 0 .17-.23l.02-.05a.4.4 0 0 0 .01-.19l-.13-.42c-.56-1.54-1.95-2.48-3.97-2.48m0-7a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
        <path fill="currentColor" d="M7 3.25c1.38 0 2.61.66 3.39 1.68a.75.75 0 0 1-1.2.91A2.74 2.74 0 1 0 5.82 10c.26.12.43.38.43.67v.51c0 .35-.24.65-.57.73a3.6 3.6 0 0 0-2.78 2.75.4.4 0 0 0 0 .19l.03.05a1 1 0 0 0 .17.23l.04.04c.1.07.17.09.92.09h.87a.75.75 0 0 1 0 1.5h-.87c-.6 0-1.2.02-1.74-.33a2 2 0 0 1-.54-.55 2 2 0 0 1-.33-.7c-.14-.6.02-1.02.17-1.45a5 5 0 0 1 2.7-2.93A4.24 4.24 0 0 1 7 3.25M17 3.25a4.25 4.25 0 0 1 2.68 7.54 5 5 0 0 1 2.7 2.93c.15.43.31.85.17 1.46-.06.26-.2.5-.33.7-.13.18-.32.4-.54.54-.55.35-1.14.33-1.74.33h-.86a.75.75 0 0 1 0-1.5h.86c.75 0 .83-.02.92-.09l.04-.04a1 1 0 0 0 .2-.28.4.4 0 0 0 0-.19l-.13-.42a3.6 3.6 0 0 0-2.65-2.33.75.75 0 0 1-.57-.73v-.5c0-.3.17-.56.43-.68a2.75 2.75 0 1 0-3.37-4.15.75.75 0 0 1-1.2-.9c.78-1.03 2-1.69 3.4-1.69" />
    </IconBase>
  ))
);

UsersThreeRegular.displayName = 'UsersThreeRegular';

// Triple export pattern (lucide-react style)
export { UsersThreeRegular, UsersThreeRegular as UsersThreeRegularIcon, UsersThreeRegular as SiUsersThreeRegular };
export type { UsersThreeRegularProps };
