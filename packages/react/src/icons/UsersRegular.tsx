import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UsersRegularProps = Omit<IconBaseProps, 'children'>;

const UsersRegular = memo(
  forwardRef<SVGSVGElement, UsersRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.86 3a5.4 5.4 0 0 1 5.48 5.3c0 1.83-.94 3.43-2.39 4.39a7.2 7.2 0 0 1 4.74 4.49c.23.62.42 1.13.24 1.88-.08.3-.26.61-.44.86-.18.24-.42.5-.7.68-.68.42-1.42.4-2.35.4H4.56c-.93 0-1.67.02-2.36-.4a3 3 0 0 1-.7-.68 3 3 0 0 1-.43-.86c-.18-.75.01-1.26.24-1.88a7.2 7.2 0 0 1 4.73-4.5 5.3 5.3 0 0 1-2.38-4.37A5.4 5.4 0 0 1 9.14 3a5.6 5.6 0 0 1 2.86.78A5.6 5.6 0 0 1 14.86 3m-.74 10.57a7 7 0 0 1 2.85 3.6c.23.63.42 1.14.23 1.89q-.07.29-.23.56h2.47c1.07 0 1.32-.03 1.58-.19q.12-.06.3-.31.2-.27.21-.39c.08-.3.04-.44-.2-1.1-.9-2.52-3.2-4.01-6.47-4.01h-.23zm-4.98.05c-3.26 0-5.57 1.49-6.48 4.01-.23.66-.27.8-.2 1.1q.04.12.21.39.2.24.3.31c.27.16.52.19 1.6.19h9.15c1.07 0 1.32-.03 1.58-.19q.11-.06.3-.31.2-.27.21-.39c.08-.3.04-.44-.2-1.1-.9-2.52-3.2-4.01-6.47-4.01m0-9.24a4 4 0 0 0-4.05 3.93 4 4 0 0 0 4.05 3.92 4 4 0 0 0 4.05-3.92 4 4 0 0 0-4.05-3.93m5.72 0q-.9.01-1.67.35a5.2 5.2 0 0 1 0 7.15q.77.34 1.67.35a4 4 0 0 0 4.05-3.92 4 4 0 0 0-4.05-3.93" clipRule="evenodd" />
    </IconBase>
  ))
);

UsersRegular.displayName = 'UsersRegular';

export { UsersRegular };
export type { UsersRegularProps };
