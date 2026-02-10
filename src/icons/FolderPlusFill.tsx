import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderPlusFillProps = Omit<IconBaseProps, 'children'>;

const FolderPlusFill = memo(
  forwardRef<SVGSVGElement, FolderPlusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-plus-fill" {...props}>
      <path fill="currentColor" d="M18 13a1 1 0 0 1 1 1v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M9.17 3.5c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.8l.13.12c.38.37.46.45.54.5a1 1 0 0 0 .28.11c.1.02.2.03.74.03h3.47q.81 0 1.4.03c.39.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v5.36A2 2 0 0 0 21 15h-1v-1a2 2 0 0 0-4 0v1h-1a2 2 0 0 0 0 4h1v1a2 2 0 0 0 .06.5H8.3q-.92 0-1.62-.02l-.43-.02a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57q-.05-.82-.04-2.05v-7q0-.81.03-1.4c.03-.39.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03zm-2.47 2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23V10h15v-.3c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09c-.28-.02-.65-.02-1.23-.02h-3.47c-.45 0-.83 0-1.2-.08a3 3 0 0 1-.87-.36c-.33-.2-.6-.48-.9-.79l-.13-.13a4 4 0 0 0-.54-.5 1 1 0 0 0-.28-.11c-.1-.02-.2-.03-.74-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderPlusFill.displayName = 'FolderPlusFill';

// Triple export pattern (lucide-react style)
export { FolderPlusFill, FolderPlusFill as FolderPlusFillIcon, FolderPlusFill as SiFolderPlusFill };
export default FolderPlusFill;
export type { FolderPlusFillProps };
