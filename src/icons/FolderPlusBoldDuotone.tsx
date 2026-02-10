import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderPlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderPlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, FolderPlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-plus-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.17 3.5c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.8l.13.12c.38.37.46.45.54.5a1 1 0 0 0 .28.11c.1.02.2.03.74.03h3.47q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v.8a1 1 0 0 1-1 1h-16v3.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04H12a1 1 0 0 1 0 2H8.3q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57q-.05-.82-.04-2.05v-7q0-.81.03-1.4c.03-.39.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03zm-2.47 2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v1.8h15q0-.67-.02-1.03a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09c-.28-.02-.65-.02-1.23-.02h-3.47c-.45 0-.83 0-1.2-.08a3 3 0 0 1-.87-.36c-.33-.2-.6-.48-.9-.79l-.13-.13a4 4 0 0 0-.54-.5 1 1 0 0 0-.28-.11c-.1-.02-.2-.03-.74-.03z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M18 13a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

FolderPlusBoldDuotone.displayName = 'FolderPlusBoldDuotone';

// Triple export pattern (lucide-react style)
export { FolderPlusBoldDuotone, FolderPlusBoldDuotone as FolderPlusBoldDuotoneIcon, FolderPlusBoldDuotone as SiFolderPlusBoldDuotone };
export default FolderPlusBoldDuotone;
export type { FolderPlusBoldDuotoneProps };
