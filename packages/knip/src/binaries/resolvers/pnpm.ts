import parseArgs from 'minimist';
import { toBinary } from '../../util/protocols.js';
import type { Resolver } from '../types.js';

// https://pnpm.io/cli/add

const commands = [
  'add',
  'audit',
  'bin',
  'config',
  'dedupe',
  'deploy',
  'dlx',
  'doctor',
  'env',
  'fetch',
  'i',
  'import',
  'init',
  'install-test',
  'install',
  'it',
  'licenses',
  'link',
  'list',
  'ln',
  'ls',
  'outdated',
  'outdated',
  'pack',
  'patch-commit',
  'patch-remove',
  'patch',
  'prune',
  'publish',
  'rb',
  'rebuild',
  'remove',
  'rm',
  'root',
  'run',
  'server',
  'setup',
  'start',
  'store',
  't',
  'test',
  'tst',
  'un',
  'uninstall',
  'unlink',
  'up',
  'update',
  'upgrade',
  'why',
];

export const resolve: Resolver = (_binary, args, { manifestScriptNames }) => {
  const parsed = parseArgs(args, {
    boolean: ['recursive', 'silent', 'shell-mode'],
    alias: { recursive: 'r', silent: 's', 'shell-mode': 'c' },
  });
  const [command, binary] = parsed._;
  if (manifestScriptNames.has(command) || commands.includes(command)) return [];
  if (command === 'exec') return [toBinary(binary)];
  return command ? [toBinary(command)] : [];
};
