import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderBoldProps = Omit<IconBaseProps, 'children'>;

const FolderBold = memo(
  forwardRef<SVGSVGElement, FolderBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.17 3.5c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.8l.13.12c.38.37.46.45.54.5a1 1 0 0 0 .28.11c.1.02.2.03.74.03h3.47q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v5q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.3q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57q-.05-.82-.04-2.05v-7q0-.81.03-1.4c.03-.39.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03zm-4.67 8v3.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h7.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-3.2zm2.2-6c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v1.8h15q0-.67-.02-1.03a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09c-.28-.02-.65-.02-1.23-.02h-3.47c-.45 0-.83 0-1.2-.08a3 3 0 0 1-.87-.36c-.33-.2-.6-.48-.9-.79l-.13-.13a4 4 0 0 0-.54-.5 1 1 0 0 0-.28-.11c-.1-.02-.2-.03-.74-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderBold.displayName = 'FolderBold';

// Triple export pattern (lucide-react style)
export { FolderBold, FolderBold as FolderBoldIcon, FolderBold as SiFolderBold };
export default FolderBold;
export type { FolderBoldProps };
